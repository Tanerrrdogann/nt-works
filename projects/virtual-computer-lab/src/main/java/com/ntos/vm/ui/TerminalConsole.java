package com.ntos.vm.ui;

import javax.swing.JTextArea;
import javax.swing.SwingUtilities;
import javax.swing.text.AttributeSet;
import javax.swing.text.BadLocationException;
import javax.swing.text.DefaultCaret;
import javax.swing.text.DocumentFilter;
import javax.swing.text.NavigationFilter;
import javax.swing.text.Position;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public final class TerminalConsole extends JTextArea {
    public static final String PROMPT = "taner@nt-os:~$ ";

    private final Function<String, String> commandHandler;
    private final List<String> history = new ArrayList<>();
    private int inputStart;
    private int historyIndex;

    public TerminalConsole(Function<String, String> commandHandler) {
        this.commandHandler = commandHandler;
        setLineWrap(true);
        setWrapStyleWord(true);
        ((DefaultCaret) getCaret()).setUpdatePolicy(DefaultCaret.ALWAYS_UPDATE);
        ((javax.swing.text.AbstractDocument) getDocument()).setDocumentFilter(new PromptGuard());
        setNavigationFilter(new PromptNavigation());
        addKeyListener(new TerminalKeys());
        writeSystemLine("[ok] NT_os Shell v1.0");
        writeSystemLine("[hint] Type 'help' to list available commands.");
        prompt();
    }

    public void writeSystemLine(String text) {
        appendAtEnd(text + System.lineSeparator());
    }

    public void writeCommandOutput(String command, String output) {
        appendAtEnd(System.lineSeparator() + PROMPT + command + System.lineSeparator());
        if (output != null && !output.isBlank()) {
            appendAtEnd(output + System.lineSeparator());
        }
        prompt();
    }

    private void submitCommand() {
        String command;
        try {
            command = getText(inputStart, getDocument().getLength() - inputStart).trim();
        } catch (BadLocationException e) {
            command = "";
        }
        if (!command.isBlank()) {
            history.add(command);
            historyIndex = history.size();
        }
        if (command.equals("clear")) {
            setText("");
            prompt();
            return;
        }
        appendAtEnd(System.lineSeparator());
        String output = commandHandler.apply(command);
        if (output != null && !output.isBlank()) {
            appendAtEnd(output + System.lineSeparator());
        }
        prompt();
    }

    private void prompt() {
        appendAtEnd(PROMPT);
        inputStart = getDocument().getLength();
        setCaretPosition(inputStart);
    }

    private void appendAtEnd(String text) {
        try {
            getDocument().insertString(getDocument().getLength(), text, null);
            setCaretPosition(getDocument().getLength());
        } catch (BadLocationException e) {
            throw new IllegalStateException(e);
        }
    }

    private void keepCaretInInput() {
        if (getCaretPosition() < inputStart) {
            SwingUtilities.invokeLater(() -> setCaretPosition(getDocument().getLength()));
        }
    }

    private void replaceInput(String text) {
        try {
            getDocument().remove(inputStart, getDocument().getLength() - inputStart);
            getDocument().insertString(getDocument().getLength(), text, null);
            setCaretPosition(getDocument().getLength());
        } catch (BadLocationException e) {
            throw new IllegalStateException(e);
        }
    }

    private final class TerminalKeys extends KeyAdapter {
        @Override
        public void keyPressed(KeyEvent event) {
            if (event.getKeyCode() == KeyEvent.VK_ENTER) {
                event.consume();
                submitCommand();
                return;
            }
            if (event.getKeyCode() == KeyEvent.VK_UP) {
                event.consume();
                if (!history.isEmpty()) {
                    historyIndex = Math.max(0, historyIndex - 1);
                    replaceInput(history.get(historyIndex));
                }
                return;
            }
            if (event.getKeyCode() == KeyEvent.VK_DOWN) {
                event.consume();
                if (!history.isEmpty()) {
                    historyIndex = Math.min(history.size(), historyIndex + 1);
                    replaceInput(historyIndex == history.size() ? "" : history.get(historyIndex));
                }
                return;
            }
            if (event.getKeyCode() == KeyEvent.VK_HOME
                    || event.getKeyCode() == KeyEvent.VK_PAGE_UP) {
                event.consume();
                setCaretPosition(inputStart);
                return;
            }
            if (event.getKeyCode() == KeyEvent.VK_BACK_SPACE && getCaretPosition() <= inputStart) {
                event.consume();
                setCaretPosition(inputStart);
            }
        }

        @Override
        public void keyReleased(KeyEvent event) {
            keepCaretInInput();
        }
    }

    private final class PromptNavigation extends NavigationFilter {
        @Override
        public void setDot(NavigationFilter.FilterBypass bypass, int dot, Position.Bias bias) {
            bypass.setDot(Math.max(dot, inputStart), bias);
        }

        @Override
        public void moveDot(NavigationFilter.FilterBypass bypass, int dot, Position.Bias bias) {
            bypass.moveDot(Math.max(dot, inputStart), bias);
        }
    }

    private final class PromptGuard extends DocumentFilter {
        @Override
        public void insertString(DocumentFilter.FilterBypass bypass, int offset, String string, AttributeSet attributes)
                throws BadLocationException {
            if (offset >= inputStart) {
                super.insertString(bypass, offset, string, attributes);
            }
        }

        @Override
        public void remove(DocumentFilter.FilterBypass bypass, int offset, int length) throws BadLocationException {
            if (offset >= inputStart) {
                super.remove(bypass, offset, length);
            }
        }

        @Override
        public void replace(DocumentFilter.FilterBypass bypass, int offset, int length, String text, AttributeSet attributes)
                throws BadLocationException {
            if (offset >= inputStart) {
                super.replace(bypass, offset, length, text, attributes);
            }
        }
    }
}
