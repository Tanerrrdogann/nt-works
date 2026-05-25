package com.ntos.vm.ui;

import javax.swing.AbstractAction;
import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.Icon;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JPopupMenu;
import javax.swing.JScrollPane;
import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.JSplitPane;
import javax.swing.JTable;
import javax.swing.JTextArea;
import javax.swing.JTextPane;
import javax.swing.JToolBar;
import javax.swing.ListSelectionModel;
import javax.swing.SwingUtilities;
import javax.swing.Timer;
import javax.swing.UIManager;
import javax.swing.KeyStroke;
import javax.swing.border.EmptyBorder;
import javax.swing.plaf.basic.BasicScrollBarUI;
import javax.swing.plaf.basic.BasicSplitPaneDivider;
import javax.swing.plaf.basic.BasicSplitPaneUI;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableColumnModel;
import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.text.BadLocationException;
import javax.swing.text.Element;
import javax.swing.text.SimpleAttributeSet;
import javax.swing.text.StyleConstants;
import javax.swing.text.StyledDocument;
import javax.imageio.ImageIO;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GraphicsEnvironment;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.LinearGradientPaint;
import java.awt.Point;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.event.ComponentAdapter;
import java.awt.event.ComponentEvent;
import java.awt.event.KeyEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionAdapter;
import java.awt.image.BufferedImage;
import java.awt.geom.RoundRectangle2D;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.BasicFileAttributes;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.EnumMap;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Locale;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class NtDesktopApp {
    private static final Color PANEL = new Color(13, 13, 20);
    private static final Color TEXT = new Color(226, 226, 232);
    private static final Color MUTED = new Color(170, 170, 182);
    private static final Color ACCENT = new Color(205, 212, 255);
    private static final Font MONO = font(new String[]{"JetBrains Mono", "Cascadia Code", "Fira Code", "Source Code Pro", Font.MONOSPACED}, Font.PLAIN, 14);
    private static final Font CODE_FONT = font(new String[]{"JetBrains Mono", "Cascadia Code", "Fira Code", "Source Code Pro", Font.MONOSPACED}, Font.PLAIN, 15);
    private static final Font UI_FONT = font(new String[]{"Inter", "SF Pro Text", "Segoe UI", "Noto Sans", "DejaVu Sans", Font.SANS_SERIF}, Font.PLAIN, 14);
    private static final Font UI_BOLD = UI_FONT.deriveFont(Font.BOLD);
    private static final DateTimeFormatter CLOCK_FORMAT = DateTimeFormatter.ofPattern("d MMM HH:mm", new Locale("tr", "TR"));
    private static final DateTimeFormatter FILE_TIME_FORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
    private static final Pattern TOKEN_PATTERN = Pattern.compile("\\b(function|return|let|print|if|else|while)\\b|\\b(\\d+)\\b|([{}(),;+\\-*/=])|(//.*?$)", Pattern.MULTILINE);
    private static final Set<String> KEYWORDS = Set.of("function", "return", "let", "print", "if", "else", "while");

    private final NtDesktopSession session = new NtDesktopSession();
    private final JDesktopPane desktop = new DesktopSurface();
    private final JTextPane editor = codeEditor(sampleSource());
    private final TerminalConsole terminal = terminal();
    private final JTextArea monitor = textArea("");
    private final JTextArea disassembly = textArea("");
    private final JTextArea compilerOutput = textArea("Compiler console ready.\n");
    private final JTextArea textViewer = textArea("");
    private final JLabel textStatus = new JLabel("Ln 1, Col 1    UTF-8    0 words");
    private final JLabel codeTabLabel = new JLabel("gui-session.nt");
    private final JPanel taskbarApps = new JPanel(new FlowLayout(FlowLayout.LEFT, 8, 0));
    private final JLabel clockLabel = new JLabel();
    private final JLabel powerLabel = new JLabel();
    private final BatteryIcon batteryIcon = new BatteryIcon();
    private final Map<AppKey, TaskbarButton> pinnedButtons = new EnumMap<>(AppKey.class);
    private final Map<AppKey, AppWindow> openWindows = new EnumMap<>(AppKey.class);
    private final Set<AppKey> pinnedAppKeys = Set.of(AppKey.TERMINAL, AppKey.FILES, AppKey.CODE);
    private Path currentCodeFile = Path.of("examples/gui-session.nt");
    private Path currentTextFile;
    private boolean highlighting;
    private JFrame frame;
    private Rectangle windowedFrameBounds = new Rectangle(80, 60, 1220, 760);
    private boolean fullscreen;

    public static void launch() {
        if (GraphicsEnvironment.isHeadless()) {
            throw new IllegalStateException("Cannot launch Swing UI in a headless environment");
        }
        SwingUtilities.invokeLater(() -> new NtDesktopApp().show());
    }

    private void show() {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (ReflectiveOperationException | javax.swing.UnsupportedLookAndFeelException ignored) {
        }

        frame = new JFrame("NT_os Virtual Computer");
        frame.setUndecorated(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setMinimumSize(new Dimension(1220, 760));
        frame.setSize(new Dimension(1220, 760));
        frame.setLocationRelativeTo(null);

        desktop.setLayout(null);
        frame.setContentPane(desktop);
        installFullscreenShortcut();

        addDesktopIcon("Terminal", icon(AppAsset.TERMINAL, 66), 34, 40, this::openTerminal);
        addDesktopIcon("Files", icon(AppAsset.FILES, 66), 34, 148, this::openFileManager);
        addDesktopIcon("Code", icon(AppAsset.CODE, 66), 34, 256, this::openEditor);
        addDesktopIcon("Text", icon(AppAsset.TEXT, 66), 34, 364, this::openTextViewer);
        addDesktopIcon("System", icon(AppAsset.SYSTEM, 66), 34, 472, this::openSystemMonitor);
        addDesktopIcon("Disasm", icon(AppAsset.DISASM, 66), 34, 580, this::openDisassembler);
        addTaskbar();

        openEditor();

        Timer timer = new Timer(1_000, ignored -> {
            refreshMonitor();
            updateClock();
            updatePowerStatus();
        });
        timer.start();

        frame.setVisible(true);
    }

    private void addTaskbar() {
        JPanel taskbar = new TaskbarPanel();
        int desktopWidth = desktop.getWidth() > 0 ? desktop.getWidth() : 1220;
        int desktopHeight = desktop.getHeight() > 0 ? desktop.getHeight() : 748;
        taskbar.setBounds(0, desktopHeight - 58, desktopWidth, 58);
        taskbar.setOpaque(false);
        taskbar.setBorder(new EmptyBorder(8, 18, 8, 18));
        taskbarApps.setOpaque(false);
        taskbarApps.setBorder(new EmptyBorder(0, 14, 0, 0));
        addPinnedTask(AppKey.TERMINAL, "Terminal", icon(AppAsset.TERMINAL, 36), this::openTerminal);
        addPinnedTask(AppKey.FILES, "Files", icon(AppAsset.FILES, 36), this::openFileManager);
        addPinnedTask(AppKey.CODE, "Code", icon(AppAsset.CODE, 36), this::openEditor);
        JButton start = startButton();
        taskbar.add(start, BorderLayout.WEST);
        taskbar.add(taskbarApps, BorderLayout.CENTER);
        taskbar.add(systemTray(), BorderLayout.EAST);
        updateClock();
        updatePowerStatus();
        desktop.add(taskbar, Integer.valueOf(1));
        desktop.addComponentListener(new ComponentAdapter() {
            @Override
            public void componentResized(ComponentEvent event) {
                taskbar.setBounds(0, desktop.getHeight() - 58, desktop.getWidth(), 58);
            }
        });
    }

    private void addDesktopIcon(String label, Icon icon, int x, int y, Runnable action) {
        JButton button = new DesktopIconButton(label, icon);
        button.setBounds(x, y, 112, 104);
        button.setForeground(TEXT);
        button.setFocusPainted(false);
        button.setBorder(new EmptyBorder(8, 8, 8, 8));
        button.setFont(UI_BOLD.deriveFont(15f));
        button.setToolTipText(label);
        button.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseEntered(MouseEvent e) {
                button.setForeground(Color.WHITE);
            }

            @Override
            public void mouseExited(MouseEvent e) {
                button.setForeground(TEXT);
            }

            @Override
            public void mouseClicked(MouseEvent e) {
                action.run();
            }
        });
        desktop.add(button, Integer.valueOf(2));
    }

    private void addPinnedTask(AppKey key, String label, Icon icon, Runnable action) {
        TaskbarButton button = new TaskbarButton(icon);
        button.setToolTipText(label);
        button.addActionListener(ignored -> action.run());
        pinnedButtons.put(key, button);
        taskbarApps.add(button);
    }

    private void ensureTaskbarButton(AppKey key) {
        if (pinnedButtons.containsKey(key)) {
            return;
        }
        TaskbarButton button = new TaskbarButton(taskbarIcon(key));
        button.setToolTipText(appLabel(key));
        button.addActionListener(ignored -> openApp(key));
        pinnedButtons.put(key, button);
        taskbarApps.add(button);
        taskbarApps.revalidate();
        taskbarApps.repaint();
    }

    private Icon taskbarIcon(AppKey key) {
        return switch (key) {
            case TERMINAL -> icon(AppAsset.TERMINAL, 36);
            case FILES -> icon(AppAsset.FILES, 36);
            case CODE -> icon(AppAsset.CODE, 36);
            case TEXT -> icon(AppAsset.TEXT, 36);
            case SYSTEM -> icon(AppAsset.SYSTEM, 36);
            case DISASM -> new DisasmSmallIcon(36);
        };
    }

    private String appLabel(AppKey key) {
        return switch (key) {
            case TERMINAL -> "Terminal";
            case FILES -> "Files";
            case CODE -> "Code";
            case TEXT -> "Text";
            case SYSTEM -> "System";
            case DISASM -> "Disasm";
        };
    }

    private void openApp(AppKey key) {
        switch (key) {
            case TERMINAL -> openTerminal();
            case FILES -> openFileManager();
            case CODE -> openEditor();
            case TEXT -> openTextViewer();
            case SYSTEM -> openSystemMonitor();
            case DISASM -> openDisassembler();
        }
    }

    private void installFullscreenShortcut() {
        desktop.getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW)
                .put(KeyStroke.getKeyStroke(KeyEvent.VK_F11, 0), "toggleFullscreen");
        desktop.getActionMap().put("toggleFullscreen", new AbstractAction() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent event) {
                toggleFrameFullscreen();
            }
        });
    }

    private void toggleFrameFullscreen() {
        if (fullscreen) {
            frame.setExtendedState(JFrame.NORMAL);
            frame.setBounds(windowedFrameBounds);
            fullscreen = false;
        } else {
            windowedFrameBounds = frame.getBounds();
            frame.setExtendedState(JFrame.MAXIMIZED_BOTH);
            fullscreen = true;
        }
    }

    private JPanel systemTray() {
        JPanel tray = new JPanel(new FlowLayout(FlowLayout.RIGHT, 12, 5));
        tray.setOpaque(false);
        clockLabel.setForeground(TEXT);
        clockLabel.setFont(UI_FONT.deriveFont(14f));
        powerLabel.setForeground(new Color(235, 236, 246));
        powerLabel.setFont(UI_BOLD.deriveFont(14f));
        tray.add(clockLabel);
        tray.add(trayLabel("SND"));
        tray.add(powerLabel);
        tray.add(batteryIcon);
        clockLabel.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent event) {
                JPopupMenu calendar = darkPopup();
                calendar.setBorder(new EmptyBorder(10, 12, 10, 12));
                JLabel now = new JLabel(LocalDateTime.now().format(DateTimeFormatter.ofPattern("EEEE, d MMMM yyyy", new Locale("tr", "TR"))));
                now.setFont(UI_BOLD.deriveFont(14f));
                now.setForeground(TEXT);
                now.setOpaque(true);
                now.setBackground(new Color(18, 18, 28));
                calendar.add(now);
                calendar.show(clockLabel, -120, -calendar.getPreferredSize().height - 8);
            }
        });
        return tray;
    }

    private JButton startButton() {
        JButton button = new JButton("NT_os");
        button.setForeground(new Color(232, 236, 255));
        button.setFont(UI_BOLD.deriveFont(17f));
        button.setContentAreaFilled(false);
        button.setOpaque(false);
        button.setFocusPainted(false);
        button.setRolloverEnabled(false);
        button.setBorder(new EmptyBorder(4, 8, 4, 10));
        JPopupMenu menu = darkPopup();
        menu.setBorder(new EmptyBorder(8, 8, 8, 8));
        JPanel menuBody = new JPanel(new BorderLayout(8, 0));
        menuBody.setOpaque(false);
        JPanel mainColumn = new JPanel(new java.awt.GridLayout(0, 1, 0, 0));
        mainColumn.setOpaque(false);
        addStartItem(mainColumn, "Terminal", this::openTerminal);
        addStartItem(mainColumn, "Files", this::openFileManager);
        addStartItem(mainColumn, "Code", this::openEditor);
        addStartItem(mainColumn, "Text", this::openTextViewer);
        addStartItem(mainColumn, "System", this::openSystemMonitor);
        addStartItem(mainColumn, "Disasm", this::openDisassembler);
        addStartItem(mainColumn, "Restart", this::restartDesktop);
        addStartItem(mainColumn, "Shutdown", this::shutdownDesktop);
        menuBody.add(mainColumn, BorderLayout.WEST);
        menu.add(menuBody);
        button.addActionListener(ignored -> menu.show(button, 0, -menu.getPreferredSize().height - 10));
        return button;
    }

    private JPopupMenu darkPopup() {
        JPopupMenu menu = new JPopupMenu();
        menu.setOpaque(true);
        menu.setFocusable(false);
        menu.setBackground(new Color(18, 18, 28));
        menu.setBorder(new EmptyBorder(8, 8, 8, 8));
        return menu;
    }

    private void restartDesktop() {
        SwingUtilities.invokeLater(() -> {
            frame.dispose();
            new NtDesktopApp().show();
        });
    }

    private void shutdownDesktop() {
        frame.dispose();
        System.exit(0);
    }

    private void addStartItem(JComponent menu, String label, Runnable action) {
        JButton item = new JButton(label);
        item.setHorizontalAlignment(JButton.LEFT);
        item.setForeground(TEXT);
        item.setBackground(new Color(22, 22, 32));
        item.setOpaque(true);
        item.setFocusPainted(false);
        item.setRolloverEnabled(false);
        item.setContentAreaFilled(false);
        item.setBorder(new EmptyBorder(8, 14, 8, 90));
        item.setFont(UI_FONT.deriveFont(14f));
        item.addActionListener(ignored -> {
            JPopupMenu popup = (JPopupMenu) SwingUtilities.getAncestorOfClass(JPopupMenu.class, item);
            if (popup != null) {
                popup.setVisible(false);
            }
            action.run();
        });
        menu.add(item);
    }

    private JLabel trayLabel(String text) {
        JLabel label = new JLabel(text);
        label.setForeground(new Color(235, 236, 246));
        label.setFont(UI_BOLD.deriveFont(15f));
        return label;
    }

    private Icon icon(AppAsset asset, int size) {
        return new ImageAssetIcon(asset.path(), size);
    }

    private void openEditor() {
        AppWindow existing = openWindows.get(AppKey.CODE);
        if (existing != null) {
            activateWindow(AppKey.CODE, existing);
            return;
        }
        AppWindow window = window(AppKey.CODE, "Code — NT_os Developer Studio", 250, 34, 650, 480);
        JButton run = runButton();
        run.addActionListener(ignored -> runSource());
        JPanel top = new JPanel(new BorderLayout());
        top.setOpaque(false);
        top.setBorder(new EmptyBorder(8, 8, 8, 8));
        JPanel menu = new JPanel(new FlowLayout(FlowLayout.LEFT, 28, 4));
        menu.setOpaque(false);
        JButton newFile = menuButton("New");
        JButton file = menuButton("File");
        JButton save = menuButton("Save");
        newFile.addActionListener(ignored -> {
            editor.setText("");
            currentCodeFile = null;
            codeTabLabel.setText("untitled.nt");
            compilerOutput.setText("New untitled.nt\n");
        });
        file.addActionListener(ignored -> openSourceFile());
        save.addActionListener(ignored -> saveCodeFile());
        menu.add(newFile);
        menu.add(file);
        menu.add(save);
        top.add(menu, BorderLayout.WEST);
        top.add(run, BorderLayout.EAST);
        window.content().add(top, BorderLayout.NORTH);
        JList<String> tree = new JList<>(new String[]{"examples/hello.nt", "examples/ntos-showcase.nt", "examples/student-system.nt", "examples/gui-session.nt", "pom.xml"});
        tree.setFont(UI_FONT.deriveFont(13f));
        tree.setForeground(TEXT);
        tree.setBackground(new Color(11, 11, 18));
        tree.setBorder(new EmptyBorder(10, 10, 10, 10));
        tree.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent event) {
                if (event.getClickCount() == 2 && tree.getSelectedValue() != null) {
                    loadCodeFile(Path.of(tree.getSelectedValue()));
                }
            }
        });
        JScrollPane editorScroll = scroll(editor);
        editorScroll.setRowHeaderView(new LineNumberView(editor));
        JPanel editorPanel = new JPanel(new BorderLayout());
        editorPanel.setBackground(new Color(7, 7, 12));
        codeTabLabel.setOpaque(true);
        codeTabLabel.setBackground(new Color(28, 28, 40));
        codeTabLabel.setForeground(TEXT);
        codeTabLabel.setBorder(new EmptyBorder(5, 12, 5, 12));
        editorPanel.add(codeTabLabel, BorderLayout.NORTH);
        editorPanel.add(editorScroll, BorderLayout.CENTER);
        JSplitPane vertical = darkSplit(JSplitPane.VERTICAL_SPLIT, editorPanel, scroll(compilerOutput), 0.76);
        JSplitPane horizontal = darkSplit(JSplitPane.HORIZONTAL_SPLIT, scroll(tree), vertical, 0.22);
        window.content().add(horizontal, BorderLayout.CENTER);
        showWindow(AppKey.CODE, window);
    }

    private void openTerminal() {
        AppWindow existing = openWindows.get(AppKey.TERMINAL);
        if (existing != null) {
            activateWindow(AppKey.TERMINAL, existing);
            return;
        }
        AppWindow window = window(AppKey.TERMINAL, "Terminal — NT_os shell", 820, 70, 410, 340);
        window.content().add(scroll(terminal), BorderLayout.CENTER);
        showWindow(AppKey.TERMINAL, window);
    }

    private void openFileManager() {
        AppWindow existing = openWindows.get(AppKey.FILES);
        if (existing != null) {
            activateWindow(AppKey.FILES, existing);
            return;
        }
        AppWindow window = window(AppKey.FILES, "Files", 170, 390, 620, 300);
        JPanel panel = new JPanel(new BorderLayout(8, 8));
        panel.setBackground(PANEL);
        panel.setBorder(new EmptyBorder(10, 10, 10, 10));
        JList<String> sidebar = new JList<>(new String[]{"Home", "Desktop", "Documents", "Downloads", "System", "Bin", "Trash"});
        sidebar.setBackground(new Color(11, 11, 18));
        sidebar.setForeground(TEXT);
        sidebar.setFont(UI_FONT.deriveFont(13f));
        sidebar.setBorder(new EmptyBorder(10, 10, 10, 10));
        JPanel top = new JPanel(new BorderLayout(8, 0));
        top.setOpaque(false);
        JButton back = toolbarButton("<");
        top.add(back, BorderLayout.WEST);
        JLabel path = label(Path.of("examples").toAbsolutePath().normalize().toString());
        path.setOpaque(true);
        path.setBackground(new Color(20, 20, 30));
        top.add(path, BorderLayout.CENTER);
        final Path[] currentDirectory = {Path.of("examples")};
        JTable table = fileTable(currentDirectory[0]);
        final Runnable[] refresh = new Runnable[1];
        refresh[0] = () -> {
            path.setText(currentDirectory[0].toAbsolutePath().normalize().toString());
            table.setModel(fileTableModel(currentDirectory[0]));
            styleFileTable(table);
        };
        back.addActionListener(ignored -> {
            Path parent = currentDirectory[0].toAbsolutePath().normalize().getParent();
            if (parent != null && Files.isDirectory(parent)) {
                currentDirectory[0] = parent;
                refresh[0].run();
            }
        });
        sidebar.addListSelectionListener(event -> {
            if (event.getValueIsAdjusting()) {
                return;
            }
            Path selected = sidebarPath(sidebar.getSelectedValue());
            currentDirectory[0] = selected;
            refresh[0].run();
        });
        table.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                int row = table.getSelectedRow();
                if (e.getClickCount() == 2 && row >= 0) {
                    Object value = table.getValueAt(row, 0);
                    if (value != null) {
                        Path selected = currentDirectory[0].resolve(value.toString()).normalize();
                        if (Files.isDirectory(selected)) {
                            currentDirectory[0] = selected;
                            refresh[0].run();
                        } else {
                            openSelectedFile(selected);
                        }
                    }
                }
            }
        });
        panel.add(top, BorderLayout.NORTH);
        panel.add(scroll(sidebar), BorderLayout.WEST);
        panel.add(scroll(table), BorderLayout.CENTER);
        panel.add(label("Double click a file to inspect it."), BorderLayout.SOUTH);
        window.content().add(panel);
        showWindow(AppKey.FILES, window);
    }

    private void openTextViewer() {
        AppWindow existing = openWindows.get(AppKey.TEXT);
        if (existing != null) {
            activateWindow(AppKey.TEXT, existing);
            return;
        }
        AppWindow window = window(AppKey.TEXT, "Text", 560, 390, 450, 300);
        if (textViewer.getText().isBlank()) {
            textViewer.setText("Open a file from File Manager.");
        }
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(PANEL);
        JToolBar toolbar = new JToolBar();
        toolbar.setFloatable(false);
        toolbar.setOpaque(false);
        JButton textNew = toolbarButton("New");
        JButton textOpen = toolbarButton("Open");
        JButton textSave = toolbarButton("Save");
        JButton textBigger = toolbarButton("A+");
        JButton textSmaller = toolbarButton("A-");
        textNew.addActionListener(ignored -> {
            textViewer.setText("");
            currentTextFile = null;
            updateTextStatus();
        });
        textOpen.addActionListener(ignored -> openTextFile());
        textSave.addActionListener(ignored -> saveTextFile());
        textBigger.addActionListener(ignored -> textViewer.setFont(textViewer.getFont().deriveFont(textViewer.getFont().getSize2D() + 1f)));
        textSmaller.addActionListener(ignored -> {
            float nextSize = Math.max(10f, textViewer.getFont().getSize2D() - 1f);
            textViewer.setFont(textViewer.getFont().deriveFont(nextSize));
        });
        toolbar.add(textNew);
        toolbar.add(textOpen);
        toolbar.add(textSave);
        toolbar.add(textBigger);
        toolbar.add(textSmaller);
        panel.add(toolbar, BorderLayout.NORTH);
        panel.add(scroll(textViewer), BorderLayout.CENTER);
        textStatus.setForeground(MUTED);
        textStatus.setFont(UI_FONT.deriveFont(12f));
        textStatus.setBorder(new EmptyBorder(6, 10, 6, 10));
        panel.add(textStatus, BorderLayout.SOUTH);
        textViewer.addCaretListener(ignored -> updateTextStatus());
        textViewer.getDocument().addDocumentListener(new DocumentListener() {
            @Override
            public void insertUpdate(DocumentEvent e) {
                updateTextStatus();
            }

            @Override
            public void removeUpdate(DocumentEvent e) {
                updateTextStatus();
            }

            @Override
            public void changedUpdate(DocumentEvent e) {
                updateTextStatus();
            }
        });
        updateTextStatus();
        window.content().add(panel, BorderLayout.CENTER);
        showWindow(AppKey.TEXT, window);
    }

    private void openSystemMonitor() {
        AppWindow existing = openWindows.get(AppKey.SYSTEM);
        if (existing != null) {
            refreshMonitor();
            activateWindow(AppKey.SYSTEM, existing);
            return;
        }
        AppWindow window = window(AppKey.SYSTEM, "System", 790, 390, 430, 300);
        refreshMonitor();
        window.content().add(systemDashboard(), BorderLayout.CENTER);
        showWindow(AppKey.SYSTEM, window);
    }

    private void openDisassembler() {
        AppWindow existing = openWindows.get(AppKey.DISASM);
        if (existing != null) {
            disassembly.setText(session.disassembly());
            activateWindow(AppKey.DISASM, existing);
            return;
        }
        AppWindow window = window(AppKey.DISASM, "Disasm", 570, 380, 620, 340);
        disassembly.setText(session.disassembly());
        window.content().add(disasmPanel(), BorderLayout.CENTER);
        showWindow(AppKey.DISASM, window);
    }

    private void openSourceFile() {
        JFileChooser chooser = new JFileChooser(Path.of("examples").toFile());
        chooser.setDialogTitle("Open NT source file");
        chooser.setFileFilter(new FileNameExtensionFilter("NT source files (*.nt)", "nt"));
        chooser.setAcceptAllFileFilterUsed(false);
        if (chooser.showOpenDialog(frame) != JFileChooser.APPROVE_OPTION) {
            return;
        }
        Path path = chooser.getSelectedFile().toPath();
        loadCodeFile(path);
    }

    private void loadCodeFile(Path path) {
        try {
            editor.setText(Files.readString(path));
            currentCodeFile = path;
            codeTabLabel.setText(path.getFileName().toString());
            applySyntaxHighlighting();
            compilerOutput.setText("Loaded " + path + "\n");
        } catch (IOException e) {
            compilerOutput.setText("file error: " + e.getMessage() + "\n");
        }
    }

    private void saveCodeFile() {
        try {
            if (currentCodeFile == null) {
                JFileChooser chooser = new JFileChooser(Path.of("examples").toFile());
                chooser.setDialogTitle("Save NT source file");
                chooser.setFileFilter(new FileNameExtensionFilter("NT source files (*.nt)", "nt"));
                if (chooser.showSaveDialog(frame) != JFileChooser.APPROVE_OPTION) {
                    return;
                }
                currentCodeFile = chooser.getSelectedFile().toPath();
                codeTabLabel.setText(currentCodeFile.getFileName().toString());
            }
            Files.writeString(currentCodeFile, editor.getText());
            compilerOutput.setText("Saved " + currentCodeFile + "\n");
        } catch (IOException e) {
            compilerOutput.setText("save error: " + e.getMessage() + "\n");
        }
    }

    private void openTextFile() {
        JFileChooser chooser = new JFileChooser(Path.of(".").toFile());
        chooser.setDialogTitle("Open text file");
        if (chooser.showOpenDialog(frame) != JFileChooser.APPROVE_OPTION) {
            return;
        }
        currentTextFile = chooser.getSelectedFile().toPath();
        try {
            textViewer.setText(Files.readString(currentTextFile));
            updateTextStatus();
        } catch (IOException e) {
            textViewer.setText("file error: " + e.getMessage());
        }
    }

    private void saveTextFile() {
        try {
            if (currentTextFile == null) {
                JFileChooser chooser = new JFileChooser(Path.of(".").toFile());
                chooser.setDialogTitle("Save text file");
                if (chooser.showSaveDialog(frame) != JFileChooser.APPROVE_OPTION) {
                    return;
                }
                currentTextFile = chooser.getSelectedFile().toPath();
            }
            Files.writeString(currentTextFile, textViewer.getText());
            updateTextStatus();
        } catch (IOException e) {
            textViewer.setText("save error: " + e.getMessage());
        }
    }

    private void runSource() {
        try {
            compilerOutput.setText("Compiler console ready.\n\ncompile examples/gui-session.nt\n");
            String input = collectProgramInput(editor.getText());
            NtDesktopSession.RunResult result = session.compileAndRun(editor.getText(), Path.of("examples/gui-session.ntbin"), input);
            compilerOutput.append("ok: wrote examples/gui-session.ntbin\n\nprogram output:\n");
            compilerOutput.append(result.terminalText());
            compilerOutput.append("\n");
            monitor.setText(result.statusText());
            disassembly.setText(result.disassembly());
        } catch (Exception e) {
            compilerOutput.append("compile error: " + e.getMessage() + "\n");
            terminal.writeSystemLine("error: " + e.getMessage());
        }
    }

    private String collectProgramInput(String source) {
        int prompts = countOccurrences(source, "input_number(") + countOccurrences(source, "input_string(");
        if (prompts == 0) {
            return "";
        }
        StringBuilder builder = new StringBuilder();
        for (int i = 1; i <= prompts; i++) {
            String value = JOptionPane.showInputDialog(frame, "Program input " + i + " / " + prompts);
            if (value == null) {
                value = "";
            }
            builder.append(value).append('\n');
        }
        return builder.toString();
    }

    private int countOccurrences(String text, String needle) {
        int count = 0;
        int index = 0;
        while ((index = text.indexOf(needle, index)) >= 0) {
            count++;
            index += needle.length();
        }
        return count;
    }

    private void openSelectedFile(Path path) {
        try {
            currentTextFile = path;
            textViewer.setText(readDisplayContent(path));
            openTextViewer();
        } catch (Exception e) {
            textViewer.setText("file error: " + e.getMessage());
            openTextViewer();
        }
    }

    private String readDisplayContent(Path path) throws IOException {
        if (path.toString().endsWith(".ntbin")) {
            byte[] bytes = Files.readAllBytes(path);
            StringBuilder builder = new StringBuilder(path + System.lineSeparator());
            for (int i = 0; i < bytes.length; i++) {
                if (i % 16 == 0) {
                    builder.append(System.lineSeparator()).append("%04X: ".formatted(i));
                }
                builder.append("%02X ".formatted(bytes[i] & 0xFF));
            }
            return builder.toString();
        }
        return session.readText(path);
    }

    private JTable fileTable(Path directory) {
        JTable table = new JTable(fileTableModel(directory));
        styleFileTable(table);
        return table;
    }

    private DefaultTableModel fileTableModel(Path directory) {
        DefaultTableModel model = new DefaultTableModel(new Object[]{"Name", "Type", "Size", "Modified"}, 0) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false;
            }
        };
        try {
            if (!Files.isDirectory(directory)) {
                model.addRow(new Object[]{directory.getFileName(), "Missing folder", "", ""});
                return model;
            }
            List<Path> files;
            try (var stream = Files.list(directory)) {
                files = stream
                        .sorted((left, right) -> {
                            boolean leftDirectory = Files.isDirectory(left);
                            boolean rightDirectory = Files.isDirectory(right);
                            if (leftDirectory != rightDirectory) {
                                return leftDirectory ? -1 : 1;
                            }
                            return left.getFileName().toString().compareToIgnoreCase(right.getFileName().toString());
                        })
                        .toList();
            }
            for (Path file : files) {
                BasicFileAttributes attributes = Files.readAttributes(file, BasicFileAttributes.class);
                String type = Files.isDirectory(file) ? "Folder" : extension(file);
                String size = Files.isDirectory(file) ? "—" : attributes.size() + " B";
                String modified = FILE_TIME_FORMAT.format(attributes.lastModifiedTime().toInstant()
                        .atZone(java.time.ZoneId.systemDefault()).toLocalDateTime());
                model.addRow(new Object[]{file.getFileName().toString(), type, size, modified});
            }
        } catch (IOException e) {
            model.addRow(new Object[]{"file manager error", e.getMessage(), "", ""});
        }
        return model;
    }

    private void styleFileTable(JTable table) {
        table.setBackground(new Color(9, 9, 15));
        table.setForeground(TEXT);
        table.setGridColor(new Color(38, 38, 52));
        table.setSelectionBackground(new Color(69, 76, 118));
        table.setSelectionForeground(Color.WHITE);
        table.setFont(UI_FONT.deriveFont(13f));
        table.setRowHeight(30);
        table.getTableHeader().setFont(UI_BOLD.deriveFont(12f));
        table.getTableHeader().setBackground(new Color(18, 18, 28));
        table.getTableHeader().setForeground(TEXT);
        TableColumnModel columns = table.getColumnModel();
        columns.getColumn(0).setPreferredWidth(170);
        columns.getColumn(1).setPreferredWidth(80);
        columns.getColumn(2).setPreferredWidth(80);
        columns.getColumn(3).setPreferredWidth(140);
    }

    private Path sidebarPath(String label) {
        if (label == null || label.equals("Home")) {
            return Path.of(System.getProperty("user.home"));
        }
        return switch (label) {
            case "Desktop" -> Path.of(System.getProperty("user.home"), "Desktop");
            case "Documents" -> Path.of(System.getProperty("user.home"), "Documents");
            case "Downloads" -> Path.of(System.getProperty("user.home"), "Downloads");
            case "System" -> Path.of(".");
            case "Bin" -> Path.of("target");
            case "Trash" -> Path.of(System.getProperty("user.home"), ".local/share/Trash/files");
            default -> Path.of("examples");
        };
    }

    private String extension(Path path) {
        String name = path.getFileName().toString();
        int dot = name.lastIndexOf('.');
        return dot >= 0 ? name.substring(dot + 1).toUpperCase(Locale.ROOT) : "File";
    }

    private void updateTextStatus() {
        try {
            int caret = textViewer.getCaretPosition();
            int line = textViewer.getLineOfOffset(caret);
            int col = caret - textViewer.getLineStartOffset(line);
            String text = textViewer.getText().trim();
            int words = text.isBlank() ? 0 : text.split("\\s+").length;
            textStatus.setText("Ln " + (line + 1) + ", Col " + (col + 1) + "    UTF-8    " + words + " words");
        } catch (BadLocationException ignored) {
            textStatus.setText("Ln 1, Col 1    UTF-8    0 words");
        }
    }

    private JPanel systemDashboard() {
        JPanel panel = new JPanel(new java.awt.GridLayout(0, 2, 10, 10));
        panel.setBackground(PANEL);
        panel.setBorder(new EmptyBorder(12, 12, 12, 12));
        Runtime runtime = Runtime.getRuntime();
        long used = (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024);
        long total = runtime.totalMemory() / (1024 * 1024);
        panel.add(infoCard("Guest", "NT_os VM\nKernel: NT VM Kernel"));
        panel.add(infoCard("Host", System.getProperty("os.name") + "\nArch: " + System.getProperty("os.arch")));
        panel.add(infoCard("CPU", "Virtual CPU\nHost cores: " + runtime.availableProcessors()));
        panel.add(infoCard("Memory", used + " MB / " + total + " MB JVM"));
        panel.add(infoCard("Disk", "Workspace: virtual-computer-lab"));
        panel.add(infoCard("Processes", session.statusText()));
        return panel;
    }

    private JPanel infoCard(String title, String value) {
        JPanel card = new JPanel(new BorderLayout());
        card.setOpaque(false);
        card.setBorder(new EmptyBorder(10, 10, 10, 10));
        JLabel header = new JLabel(title);
        header.setForeground(new Color(198, 202, 255));
        header.setFont(UI_BOLD.deriveFont(13f));
        JTextArea body = textArea(value);
        body.setEditable(false);
        body.setOpaque(false);
        card.add(header, BorderLayout.NORTH);
        card.add(body, BorderLayout.CENTER);
        return new GlassCard(card);
    }

    private JPanel disasmPanel() {
        JPanel panel = new JPanel(new BorderLayout(8, 8));
        panel.setBackground(PANEL);
        panel.setBorder(new EmptyBorder(10, 10, 10, 10));
        JTextArea fileInfo = textArea("File: examples/gui-session.ntbin\nFormat: NTBIN\nArchitecture: NT_VM\nEntry: 0x0000");
        fileInfo.setEditable(false);
        JTextArea hex = textArea(hexDump(Path.of("examples/gui-session.ntbin")));
        JButton open = toolbarButton("Open Binary");
        open.addActionListener(ignored -> {
            JFileChooser chooser = new JFileChooser(Path.of("examples").toFile());
            chooser.setDialogTitle("Open binary");
            if (chooser.showOpenDialog(frame) == JFileChooser.APPROVE_OPTION) {
                Path selected = chooser.getSelectedFile().toPath();
                fileInfo.setText("File: " + selected + "\nFormat: raw/NTBIN\nArchitecture: NT_VM\nEntry: 0x0000");
                hex.setText(hexDump(selected));
            }
        });
        JPanel left = new JPanel(new BorderLayout(0, 8));
        left.setOpaque(false);
        left.add(open, BorderLayout.NORTH);
        left.add(scroll(fileInfo), BorderLayout.CENTER);
        JSplitPane split = darkSplit(JSplitPane.HORIZONTAL_SPLIT, scroll(disassembly), scroll(hex), 0.62);
        panel.add(left, BorderLayout.WEST);
        panel.add(split, BorderLayout.CENTER);
        return panel;
    }

    private String hexDump(Path path) {
        try {
            byte[] bytes = Files.readAllBytes(path);
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < bytes.length; i += 16) {
                builder.append("%04X  ".formatted(i));
                for (int j = 0; j < 16 && i + j < bytes.length; j++) {
                    builder.append("%02X ".formatted(bytes[i + j] & 0xFF));
                }
                builder.append(System.lineSeparator());
            }
            return builder.toString();
        } catch (IOException e) {
            return "binary error: " + e.getMessage();
        }
    }

    private void refreshMonitor() {
        monitor.setText(session.statusText());
    }

    private void updateClock() {
        clockLabel.setText(LocalDateTime.now().format(CLOCK_FORMAT));
    }

    private void updatePowerStatus() {
        PowerStatus status = PowerStatus.read();
        powerLabel.setText(status.label());
        batteryIcon.setPercent(status.percent());
        batteryIcon.setCharging(status.charging());
    }

    private AppWindow window(AppKey key, String title, int x, int y, int width, int height) {
        AppWindow window = new AppWindow(key, title);
        window.setBounds(x, y, width, height);
        return window;
    }

    private void showWindow(AppKey key, AppWindow window) {
        openWindows.put(key, window);
        ensureTaskbarButton(key);
        desktop.add(window, Integer.valueOf(3));
        window.setVisible(true);
        desktop.setLayer(window, 3);
        animateOpen(window);
        activateWindow(key, window);
    }

    private void animateOpen(AppWindow window) {
        Rectangle target = window.getBounds();
        Rectangle start = new Rectangle(target.x + 12, target.y + 10, Math.max(80, target.width - 24), Math.max(80, target.height - 20));
        window.setBounds(start);
        Timer animation = new Timer(12, null);
        final int[] step = {0};
        animation.addActionListener(ignored -> {
            step[0]++;
            double t = Math.min(1.0, step[0] / 8.0);
            int x = (int) Math.round(start.x + (target.x - start.x) * t);
            int y = (int) Math.round(start.y + (target.y - start.y) * t);
            int width = (int) Math.round(start.width + (target.width - start.width) * t);
            int height = (int) Math.round(start.height + (target.height - start.height) * t);
            window.setBounds(x, y, width, height);
            if (t >= 1.0) {
                animation.stop();
                window.setBounds(target);
            }
        });
        animation.start();
    }

    private void activateWindow(AppKey key, AppWindow window) {
        window.restoreFromTaskbar();
        bringToFront(window);
        pinnedButtons.forEach((appKey, button) -> button.setActive(appKey == key));
        TaskbarButton button = pinnedButtons.get(key);
        if (button != null) {
            button.setOpen(true);
        }
    }

    private JTextPane codeEditor(String text) {
        JTextPane pane = new JTextPane();
        pane.setText(text);
        pane.setBackground(new Color(7, 7, 12));
        pane.setForeground(TEXT);
        pane.setCaretColor(new Color(235, 236, 255));
        pane.setSelectionColor(new Color(69, 76, 118));
        pane.setSelectedTextColor(Color.WHITE);
        pane.setFont(CODE_FONT);
        pane.setBorder(new EmptyBorder(16, 18, 16, 18));
        pane.getDocument().addDocumentListener(new DocumentListener() {
            @Override
            public void insertUpdate(DocumentEvent event) {
                scheduleSyntaxHighlighting();
            }

            @Override
            public void removeUpdate(DocumentEvent event) {
                scheduleSyntaxHighlighting();
            }

            @Override
            public void changedUpdate(DocumentEvent event) {
            }
        });
        applySyntaxHighlighting(pane);
        return pane;
    }

    private void scheduleSyntaxHighlighting() {
        if (highlighting) {
            return;
        }
        SwingUtilities.invokeLater(this::applySyntaxHighlighting);
    }

    private void applySyntaxHighlighting() {
        applySyntaxHighlighting(editor);
    }

    private void applySyntaxHighlighting(JTextPane pane) {
        highlighting = true;
        try {
            StyledDocument doc = pane.getStyledDocument();
            String text = doc.getText(0, doc.getLength());
            doc.setCharacterAttributes(0, text.length(), syntaxStyle(TEXT, false), true);
            Matcher matcher = TOKEN_PATTERN.matcher(text);
            while (matcher.find()) {
                SimpleAttributeSet style = syntaxStyle(TEXT, false);
                String token = matcher.group();
                if (matcher.group(1) != null && KEYWORDS.contains(token)) {
                    style = syntaxStyle(new Color(188, 151, 255), token.equals("function") || token.equals("let"));
                } else if (matcher.group(2) != null) {
                    style = syntaxStyle(new Color(244, 198, 125), false);
                } else if (matcher.group(3) != null) {
                    style = syntaxStyle(new Color(164, 170, 205), false);
                } else if (matcher.group(4) != null) {
                    style = syntaxStyle(new Color(112, 118, 142), false);
                }
                doc.setCharacterAttributes(matcher.start(), matcher.end() - matcher.start(), style, true);
            }
        } catch (BadLocationException ignored) {
        } finally {
            highlighting = false;
        }
    }

    private SimpleAttributeSet syntaxStyle(Color color, boolean bold) {
        SimpleAttributeSet style = new SimpleAttributeSet();
        StyleConstants.setForeground(style, color);
        StyleConstants.setFontFamily(style, CODE_FONT.getFamily());
        StyleConstants.setFontSize(style, CODE_FONT.getSize());
        StyleConstants.setBold(style, bold);
        return style;
    }

    private JTextArea textArea(String text) {
        JTextArea area = new JTextArea(text);
        area.setBackground(new Color(8, 8, 13));
        area.setForeground(TEXT);
        area.setCaretColor(ACCENT);
        area.setSelectionColor(new Color(67, 72, 110));
        area.setSelectedTextColor(Color.WHITE);
        area.setFont(MONO);
        area.setBorder(new EmptyBorder(14, 16, 14, 16));
        return area;
    }

    private JScrollPane scroll(JComponent component) {
        JScrollPane pane = new JScrollPane(component);
        pane.setBorder(null);
        pane.getViewport().setBackground(new Color(7, 7, 12));
        pane.setBackground(new Color(7, 7, 12));
        pane.getVerticalScrollBar().setUI(new DarkScrollBarUI());
        pane.getHorizontalScrollBar().setUI(new DarkScrollBarUI());
        pane.getVerticalScrollBar().setBackground(new Color(7, 7, 12));
        pane.getHorizontalScrollBar().setBackground(new Color(7, 7, 12));
        return pane;
    }

    private JSplitPane darkSplit(int orientation, Component first, Component second, double resizeWeight) {
        JSplitPane split = new JSplitPane(orientation, first, second);
        split.setResizeWeight(resizeWeight);
        split.setBorder(null);
        split.setDividerSize(6);
        split.setBackground(new Color(7, 7, 12));
        split.setUI(new BasicSplitPaneUI() {
            @Override
            public BasicSplitPaneDivider createDefaultDivider() {
                return new BasicSplitPaneDivider(this) {
                    @Override
                    public void paint(Graphics graphics) {
                        Graphics2D g = (Graphics2D) graphics.create();
                        g.setColor(new Color(74, 75, 90));
                        g.fillRect(0, 0, getWidth(), getHeight());
                        g.setColor(new Color(160, 162, 178, 120));
                        if (orientation == JSplitPane.VERTICAL_SPLIT) {
                            g.drawLine(getWidth() / 2 - 12, getHeight() / 2, getWidth() / 2 + 12, getHeight() / 2);
                        } else {
                            g.drawLine(getWidth() / 2, getHeight() / 2 - 12, getWidth() / 2, getHeight() / 2 + 12);
                        }
                        g.dispose();
                    }
                };
            }
        });
        return split;
    }

    private JButton actionButton(String text) {
        JButton button = new FlatButton(text, new Color(69, 69, 88), 4);
        button.setForeground(Color.WHITE);
        button.setFocusPainted(false);
        button.setRolloverEnabled(false);
        button.setBorder(new EmptyBorder(9, 16, 9, 16));
        button.setFont(UI_BOLD.deriveFont(13f));
        return button;
    }

    private JButton runButton() {
        JButton button = actionButton("Compile & Run");
        button.setIcon(new PlayIcon(13));
        button.setIconTextGap(8);
        return button;
    }

    private TerminalConsole terminal() {
        TerminalConsole console = new TerminalConsole(command -> {
            if (command.equals("clear")) {
                return "";
            }
            if (command.equals("open files")) {
                SwingUtilities.invokeLater(this::openFileManager);
                return "opened Files";
            }
            if (command.equals("open code")) {
                SwingUtilities.invokeLater(this::openEditor);
                return "opened Code";
            }
            if (command.equals("open system")) {
                SwingUtilities.invokeLater(this::openSystemMonitor);
                return "opened System";
            }
            if (command.equals("open text")) {
                SwingUtilities.invokeLater(this::openTextViewer);
                return "opened Text";
            }
            if (command.equals("open disasm")) {
                SwingUtilities.invokeLater(this::openDisassembler);
                return "opened Disasm";
            }
            return session.shell(command);
        });
        console.setBackground(Color.BLACK);
        console.setForeground(new Color(212, 255, 222));
        console.setCaretColor(ACCENT);
        console.setSelectionColor(new Color(67, 72, 110));
        console.setSelectedTextColor(Color.WHITE);
        console.setFont(MONO);
        console.setBorder(new EmptyBorder(14, 16, 14, 16));
        return console;
    }

    private JLabel label(String text) {
        JLabel label = new JLabel(text);
        label.setForeground(MUTED);
        label.setBorder(new EmptyBorder(6, 8, 6, 8));
        return label;
    }

    private JButton menuButton(String text) {
        JButton button = new FlatButton(text, new Color(0, 0, 0, 0), 4);
        button.setForeground(MUTED);
        button.setBorder(new EmptyBorder(5, 10, 5, 10));
        button.setFocusPainted(false);
        button.setRolloverEnabled(false);
        button.setFont(UI_BOLD.deriveFont(15f));
        return button;
    }

    private JButton toolbarButton(String text) {
        JButton button = new FlatButton(text, new Color(34, 34, 46), 5);
        button.setForeground(TEXT);
        button.setFocusPainted(false);
        button.setRolloverEnabled(false);
        button.setBorder(new EmptyBorder(7, 10, 7, 10));
        button.setFont(UI_FONT.deriveFont(12f));
        return button;
    }

    private static final class FlatButton extends JButton {
        private final Color background;
        private final int radius;

        private FlatButton(String text, Color background, int radius) {
            super(text);
            this.background = background;
            this.radius = radius;
            setContentAreaFilled(false);
            setOpaque(false);
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            Color color = getModel().isPressed() ? background.brighter() : background;
            g.setColor(color);
            g.fillRoundRect(0, 0, getWidth(), getHeight(), radius, radius);
            g.dispose();
            super.paintComponent(graphics);
        }
    }

    private static final class GlassCard extends JPanel {
        private final JPanel content;

        private GlassCard(JPanel content) {
            super(new BorderLayout());
            this.content = content;
            setOpaque(false);
            add(content, BorderLayout.CENTER);
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g.setColor(new Color(255, 255, 255, 18));
            g.fillRoundRect(0, 0, getWidth(), getHeight(), 16, 16);
            g.setColor(new Color(205, 212, 255, 44));
            g.drawRoundRect(0, 0, getWidth() - 1, getHeight() - 1, 16, 16);
            g.dispose();
            super.paintComponent(graphics);
        }
    }

    private static final class DarkScrollBarUI extends BasicScrollBarUI {
        @Override
        protected void configureScrollBarColors() {
            thumbColor = new Color(65, 66, 88);
            trackColor = new Color(7, 7, 12);
        }

        @Override
        protected void paintTrack(Graphics graphics, JComponent component, Rectangle trackBounds) {
            graphics.setColor(new Color(7, 7, 12));
            graphics.fillRect(trackBounds.x, trackBounds.y, trackBounds.width, trackBounds.height);
        }

        @Override
        protected void paintThumb(Graphics graphics, JComponent component, Rectangle thumbBounds) {
            if (thumbBounds.isEmpty()) {
                return;
            }
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g.setColor(new Color(76, 77, 96));
            g.fillRoundRect(thumbBounds.x + 2, thumbBounds.y + 2,
                    Math.max(4, thumbBounds.width - 4), Math.max(4, thumbBounds.height - 4), 8, 8);
            g.dispose();
        }

        @Override
        protected JButton createDecreaseButton(int orientation) {
            return scrollButton();
        }

        @Override
        protected JButton createIncreaseButton(int orientation) {
            return scrollButton();
        }

        private JButton scrollButton() {
            JButton button = new JButton();
            button.setOpaque(false);
            button.setContentAreaFilled(false);
            button.setBorder(null);
            button.setPreferredSize(new Dimension(0, 0));
            button.setMinimumSize(new Dimension(0, 0));
            button.setMaximumSize(new Dimension(0, 0));
            return button;
        }
    }

    private static final class PlayIcon implements Icon {
        private final int size;

        private PlayIcon(int size) {
            this.size = size;
        }

        @Override
        public void paintIcon(Component component, Graphics graphics, int x, int y) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            int[] xs = {x + 2, x + 2, x + size - 1};
            int[] ys = {y + 1, y + size - 1, y + size / 2};
            g.setColor(Color.WHITE);
            g.fillPolygon(xs, ys, 3);
            g.dispose();
        }

        @Override
        public int getIconWidth() {
            return size;
        }

        @Override
        public int getIconHeight() {
            return size;
        }
    }

    private final class AppWindow extends JPanel {
        private final AppKey key;
        private final String title;
        private final JPanel content = new JPanel(new BorderLayout());
        private Point dragStart;
        private Point resizeStart;
        private Dimension resizeSize;
        private Rectangle resizeBounds;
        private int resizeEdge;
        private Rectangle normalBounds;
        private boolean maximized;

        private AppWindow(AppKey key, String title) {
            super(new BorderLayout());
            this.key = key;
            this.title = title;
            setOpaque(false);
            setBorder(new EmptyBorder(8, 8, 8, 8));

            JPanel header = new JPanel(new BorderLayout());
            header.setOpaque(false);
            header.setBorder(new EmptyBorder(8, 12, 8, 8));
            JLabel label = new JLabel(title);
            label.setForeground(TEXT);
            label.setFont(UI_BOLD.deriveFont(13f));
            JPanel controls = new JPanel(new FlowLayout(FlowLayout.RIGHT, 5, 0));
            controls.setOpaque(false);
            JButton minimize = windowButton(WindowControl.MINIMIZE);
            JButton maximize = windowButton(WindowControl.MAXIMIZE);
            JButton close = windowButton(WindowControl.CLOSE);
            minimize.addActionListener(ignored -> setVisible(false));
            maximize.addActionListener(ignored -> toggleMaximize());
            close.addActionListener(ignored -> {
                desktop.remove(this);
                openWindows.remove(key);
                TaskbarButton button = pinnedButtons.get(key);
                if (button != null) {
                    button.setOpen(false);
                    button.setActive(false);
                }
                if (button != null && !pinnedAppKeys.contains(key)) {
                    pinnedButtons.remove(key);
                    taskbarApps.remove(button);
                }
                taskbarApps.revalidate();
                taskbarApps.repaint();
                desktop.revalidate();
                desktop.repaint();
            });
            controls.add(minimize);
            controls.add(maximize);
            controls.add(close);
            header.add(label, BorderLayout.WEST);
            header.add(controls, BorderLayout.EAST);
            MouseAdapter drag = new MouseAdapter() {
                @Override
                public void mousePressed(MouseEvent event) {
                    dragStart = event.getPoint();
                    bringToFront(AppWindow.this);
                }

                @Override
                public void mouseDragged(MouseEvent event) {
                    Point location = getLocation();
                    setLocation(location.x + event.getX() - dragStart.x, location.y + event.getY() - dragStart.y);
                }
            };
            header.addMouseListener(drag);
            header.addMouseMotionListener(drag);

            MouseAdapter resize = new MouseAdapter() {
                @Override
                public void mousePressed(MouseEvent event) {
                    int edge = resizeEdge(event.getPoint());
                    if (edge != 0) {
                        if (maximized) {
                            maximized = false;
                        }
                        resizeStart = event.getLocationOnScreen();
                        resizeSize = getSize();
                        resizeBounds = getBounds();
                        resizeEdge = edge;
                    }
                }

                @Override
                public void mouseReleased(MouseEvent event) {
                    resizeStart = null;
                    resizeSize = null;
                    resizeBounds = null;
                    resizeEdge = 0;
                }
            };
            addMouseListener(resize);
            addMouseMotionListener(new MouseMotionAdapter() {
                @Override
                public void mouseMoved(MouseEvent event) {
                    setCursor(java.awt.Cursor.getPredefinedCursor(cursorForEdge(resizeEdge(event.getPoint()))));
                }

                @Override
                public void mouseDragged(MouseEvent event) {
                    if (resizeStart != null && resizeSize != null && resizeBounds != null) {
                        Point screen = event.getLocationOnScreen();
                        int dx = screen.x - resizeStart.x;
                        int dy = screen.y - resizeStart.y;
                        Rectangle next = resizedBounds(dx, dy);
                        setBounds(next);
                        revalidate();
                        repaint();
                    }
                }
            });

            content.setOpaque(false);
            content.setBackground(PANEL);
            add(header, BorderLayout.NORTH);
            add(content, BorderLayout.CENTER);
        }

        private int resizeEdge(Point point) {
            int margin = 10;
            int edge = 0;
            if (point.x <= margin) {
                edge |= 1;
            } else if (point.x >= getWidth() - margin) {
                edge |= 2;
            }
            if (point.y <= margin) {
                edge |= 4;
            } else if (point.y >= getHeight() - margin) {
                edge |= 8;
            }
            return edge;
        }

        private int cursorForEdge(int edge) {
            return switch (edge) {
                case 1 -> java.awt.Cursor.W_RESIZE_CURSOR;
                case 2 -> java.awt.Cursor.E_RESIZE_CURSOR;
                case 4 -> java.awt.Cursor.N_RESIZE_CURSOR;
                case 8 -> java.awt.Cursor.S_RESIZE_CURSOR;
                case 1 | 4, 2 | 8 -> java.awt.Cursor.NW_RESIZE_CURSOR;
                case 2 | 4, 1 | 8 -> java.awt.Cursor.NE_RESIZE_CURSOR;
                default -> java.awt.Cursor.DEFAULT_CURSOR;
            };
        }

        private Rectangle resizedBounds(int dx, int dy) {
            int minWidth = 320;
            int minHeight = 220;
            int x = resizeBounds.x;
            int y = resizeBounds.y;
            int width = resizeBounds.width;
            int height = resizeBounds.height;
            if ((resizeEdge & 1) != 0) {
                int newWidth = Math.max(minWidth, resizeBounds.width - dx);
                x = resizeBounds.x + resizeBounds.width - newWidth;
                width = newWidth;
            }
            if ((resizeEdge & 2) != 0) {
                width = Math.max(minWidth, resizeBounds.width + dx);
            }
            if ((resizeEdge & 4) != 0) {
                int newHeight = Math.max(minHeight, resizeBounds.height - dy);
                y = resizeBounds.y + resizeBounds.height - newHeight;
                height = newHeight;
            }
            if ((resizeEdge & 8) != 0) {
                height = Math.max(minHeight, resizeBounds.height + dy);
            }
            return new Rectangle(x, y, width, height);
        }

        private String title() {
            return title;
        }

        private JPanel content() {
            return content;
        }

        private void restoreFromTaskbar() {
            setVisible(true);
        }

        private void toggleMaximize() {
            if (maximized) {
                if (normalBounds != null) {
                    setBounds(normalBounds);
                }
                maximized = false;
            } else {
                normalBounds = getBounds();
                setBounds(0, 0, desktop.getWidth(), Math.max(220, desktop.getHeight() - 58));
                maximized = true;
            }
            revalidate();
            repaint();
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
            for (int i = 12; i > 0; i--) {
                g.setColor(new Color(0, 0, 0, 6));
                g.fillRoundRect(i / 2, i, getWidth() - i, getHeight() - i, 24, 24);
            }
            g.setPaint(new LinearGradientPaint(
                    0, 0, 0, getHeight(),
                    new float[]{0f, 0.42f, 1f},
                    new Color[]{new Color(22, 22, 30, 246), new Color(8, 8, 14, 246), new Color(14, 14, 22, 246)}
            ));
            g.fillRoundRect(0, 0, getWidth(), getHeight(), 22, 22);
            g.setColor(new Color(255, 255, 255, 32));
            g.drawLine(18, 1, getWidth() - 22, 1);
            g.setColor(new Color(122, 122, 146, 118));
            g.drawRoundRect(0, 0, getWidth() - 1, getHeight() - 1, 22, 22);
            g.setColor(new Color(255, 255, 255, 54));
            g.drawLine(getWidth() - 14, getHeight() - 5, getWidth() - 5, getHeight() - 14);
            g.drawLine(getWidth() - 10, getHeight() - 5, getWidth() - 5, getHeight() - 10);
            g.dispose();
            super.paintComponent(graphics);
        }

        @Override
        protected void paintChildren(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setClip(new RoundRectangle2D.Float(0, 0, getWidth(), getHeight(), 22, 22));
            super.paintChildren(g);
            g.dispose();
        }
    }

    private JButton windowButton(WindowControl control) {
        JButton button = new WindowControlButton(control);
        button.setFocusPainted(false);
        button.setRolloverEnabled(false);
        return button;
    }

    private enum WindowControl {
        MINIMIZE,
        MAXIMIZE,
        CLOSE
    }

    private static final class WindowControlButton extends JButton {
        private final WindowControl control;

        private WindowControlButton(WindowControl control) {
            this.control = control;
            setPreferredSize(new Dimension(22, 20));
            setMinimumSize(new Dimension(22, 20));
            setMaximumSize(new Dimension(22, 20));
            setBorder(new EmptyBorder(0, 0, 0, 0));
            setContentAreaFilled(false);
            setOpaque(false);
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g.setColor(new Color(255, 255, 255, 18));
            g.fillRoundRect(1, 1, getWidth() - 2, getHeight() - 2, 3, 3);
            g.setColor(new Color(184, 186, 204));
            int cx = getWidth() / 2;
            int cy = getHeight() / 2;
            switch (control) {
                case MINIMIZE -> g.drawLine(cx - 4, cy + 3, cx + 4, cy + 3);
                case MAXIMIZE -> g.drawRect(cx - 4, cy - 4, 8, 8);
                case CLOSE -> {
                    g.drawLine(cx - 4, cy - 4, cx + 4, cy + 4);
                    g.drawLine(cx + 4, cy - 4, cx - 4, cy + 4);
                }
            }
            g.dispose();
        }
    }

    private void bringToFront(JComponent component) {
        desktop.setComponentZOrder(component, 0);
        desktop.repaint();
    }

    private static final class TaskbarButton extends JButton {
        private boolean open;
        private boolean active;

        private TaskbarButton(Icon icon) {
            super(icon);
            setPreferredSize(new Dimension(48, 42));
            setMinimumSize(new Dimension(48, 42));
            setMaximumSize(new Dimension(48, 42));
            setBorder(new EmptyBorder(3, 6, 7, 6));
            setContentAreaFilled(false);
            setOpaque(false);
            setFocusPainted(false);
            setRolloverEnabled(true);
        }

        private void setOpen(boolean open) {
            this.open = open;
            repaint();
        }

        private void setActive(boolean active) {
            this.active = active;
            repaint();
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            if (getModel().isRollover()) {
                g.setColor(new Color(205, 212, 255, 22));
                g.fillRoundRect(2, 1, getWidth() - 4, getHeight() - 5, 18, 18);
            }
            if (active) {
                g.setColor(new Color(198, 202, 255, 26));
                g.fillRoundRect(0, 0, getWidth(), getHeight() - 3, 20, 20);
                g.setColor(new Color(255, 255, 255, 42));
                g.fillRoundRect(2, 1, getWidth() - 4, getHeight() - 5, 19, 19);
            }
            super.paintComponent(graphics);
            if (open) {
                g.setColor(active ? new Color(255, 255, 255, 240) : new Color(245, 247, 255, 210));
                int dotWidth = active ? 18 : 6;
                g.fillRoundRect((getWidth() - dotWidth) / 2, getHeight() - 5, dotWidth, 3, 3, 3);
            }
            g.dispose();
        }
    }

    private static final class TaskbarPanel extends JPanel {
        private TaskbarPanel() {
            super(new BorderLayout());
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g.setColor(new Color(10, 10, 17, 196));
            g.fillRoundRect(0, 0, getWidth(), getHeight() + 22, 22, 22);
            g.setColor(new Color(255, 255, 255, 38));
            g.drawRoundRect(0, 0, getWidth() - 1, getHeight() + 22, 22, 22);
            g.dispose();
            super.paintComponent(graphics);
        }
    }

    private static final class BatteryIcon extends JComponent {
        private int percent = -1;
        private boolean charging;

        private BatteryIcon() {
            setPreferredSize(new Dimension(32, 18));
        }

        private void setPercent(int percent) {
            this.percent = percent;
            repaint();
        }

        private void setCharging(boolean charging) {
            this.charging = charging;
            repaint();
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g.setColor(new Color(235, 236, 246));
            g.drawRoundRect(1, 3, 25, 12, 4, 4);
            g.fillRoundRect(28, 7, 3, 5, 2, 2);
            int fill = percent >= 0 ? Math.max(2, Math.min(20, Math.round(percent / 100f * 20))) : 20;
            g.setColor(charging ? new Color(139, 255, 166) : new Color(205, 212, 255));
            g.fillRoundRect(4, 6, fill, 6, 3, 3);
            g.dispose();
        }
    }

    private record PowerStatus(int percent, boolean charging, String label) {
        private static PowerStatus read() {
            Path root = Path.of("/sys/class/power_supply");
            try {
                if (!Files.isDirectory(root)) {
                    return new PowerStatus(-1, false, "AC");
                }
                try (var supplies = Files.list(root)) {
                    for (Path supply : supplies.toList()) {
                        Path typePath = supply.resolve("type");
                        String type = Files.exists(typePath) ? Files.readString(typePath).trim() : "";
                        if (!type.equalsIgnoreCase("Battery")) {
                            continue;
                        }
                        int capacity = readInt(supply.resolve("capacity"), -1);
                        String status = Files.exists(supply.resolve("status")) ? Files.readString(supply.resolve("status")).trim() : "";
                        boolean charging = status.equalsIgnoreCase("Charging") || status.equalsIgnoreCase("Full");
                        String prefix = charging ? "AC " : "";
                        return new PowerStatus(capacity, charging, capacity >= 0 ? prefix + capacity + "%" : prefix + "BAT");
                    }
                }
            } catch (IOException ignored) {
            }
            return new PowerStatus(-1, false, "AC");
        }

        private static int readInt(Path path, int fallback) {
            try {
                return Integer.parseInt(Files.readString(path).trim());
            } catch (IOException | NumberFormatException e) {
                return fallback;
            }
        }
    }

    private static final class DesktopSurface extends JDesktopPane {
        private static final BufferedImage WALLPAPER = loadImage("/com/ntos/vm/ui/assets/desktop-wallpaper.png");

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
            g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC);
            if (WALLPAPER != null) {
                drawCover(g, WALLPAPER, getWidth(), getHeight());
            } else {
                g.setPaint(new LinearGradientPaint(
                        0, 0, getWidth(), getHeight(),
                        new float[]{0f, 0.52f, 1f},
                        new Color[]{new Color(25, 26, 34), new Color(44, 47, 65), new Color(63, 61, 100)}
                ));
                g.fillRect(0, 0, getWidth(), getHeight());
            }
            g.dispose();
        }

        private static void drawCover(Graphics2D g, BufferedImage image, int width, int height) {
            double scale = Math.max(width / (double) image.getWidth(), height / (double) image.getHeight());
            int drawWidth = (int) Math.ceil(image.getWidth() * scale);
            int drawHeight = (int) Math.ceil(image.getHeight() * scale);
            int x = (width - drawWidth) / 2;
            int y = (height - drawHeight) / 2;
            g.drawImage(image, x, y, drawWidth, drawHeight, null);
        }
    }

    private static final class ImageAssetIcon implements Icon {
        private final BufferedImage image;
        private final int size;

        private ImageAssetIcon(String path, int size) {
            this.image = loadImage(path);
            this.size = size;
        }

        @Override
        public void paintIcon(Component component, Graphics graphics, int x, int y) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC);
            g.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
            if (image != null) {
                g.drawImage(image, x, y, size, size, null);
            }
            g.dispose();
        }

        @Override
        public int getIconWidth() {
            return size;
        }

        @Override
        public int getIconHeight() {
            return size;
        }
    }

    private static final class DisasmSmallIcon implements Icon {
        private final int size;

        private DisasmSmallIcon(int size) {
            this.size = size;
        }

        @Override
        public void paintIcon(Component component, Graphics graphics, int x, int y) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g.translate(x, y);
            g.setColor(new Color(86, 38, 180));
            java.awt.Polygon hex = new java.awt.Polygon();
            hex.addPoint(size / 2, 2);
            hex.addPoint(size - 4, size / 4);
            hex.addPoint(size - 4, size * 3 / 4);
            hex.addPoint(size / 2, size - 2);
            hex.addPoint(4, size * 3 / 4);
            hex.addPoint(4, size / 4);
            g.fillPolygon(hex);
            g.setColor(new Color(184, 150, 255));
            g.drawPolygon(hex);
            g.setFont(new Font(Font.MONOSPACED, Font.BOLD, Math.max(11, size / 3)));
            g.setColor(new Color(235, 225, 255));
            g.drawString("0x", size / 2 - 8, size / 2 + 5);
            g.dispose();
        }

        @Override
        public int getIconWidth() {
            return size;
        }

        @Override
        public int getIconHeight() {
            return size;
        }
    }

    private static final class LineNumberView extends JComponent {
        private final JTextPane editor;

        private LineNumberView(JTextPane editor) {
            this.editor = editor;
            setPreferredSize(new Dimension(42, 10));
            editor.getDocument().addDocumentListener(new DocumentListener() {
                @Override
                public void insertUpdate(DocumentEvent e) {
                    revalidate();
                    repaint();
                }

                @Override
                public void removeUpdate(DocumentEvent e) {
                    revalidate();
                    repaint();
                }

                @Override
                public void changedUpdate(DocumentEvent e) {
                    revalidate();
                    repaint();
                }
            });
            editor.addComponentListener(new ComponentAdapter() {
                @Override
                public void componentResized(ComponentEvent event) {
                    revalidate();
                    repaint();
                }
            });
        }

        @Override
        public Dimension getPreferredSize() {
            return new Dimension(42, Math.max(editor.getPreferredSize().height, editor.getHeight()));
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setColor(new Color(12, 12, 18));
            g.fillRect(0, 0, getWidth(), getHeight());
            g.setColor(new Color(108, 112, 136));
            g.setFont(CODE_FONT);
            Element root = editor.getDocument().getDefaultRootElement();
            Rectangle clip = g.getClipBounds();
            int ascent = g.getFontMetrics().getAscent();
            for (int i = 0; i < root.getElementCount(); i++) {
                try {
                    Rectangle line = editor.modelToView2D(root.getElement(i).getStartOffset()).getBounds();
                    int y = line.y + ascent;
                    if (y >= clip.y - 20 && y <= clip.y + clip.height + 20) {
                        String number = String.valueOf(i + 1);
                        int x = getWidth() - g.getFontMetrics().stringWidth(number) - 10;
                        g.drawString(number, x, y);
                    }
                } catch (BadLocationException ignored) {
                }
            }
            g.dispose();
        }
    }

    private enum AppKey {
        TERMINAL,
        FILES,
        CODE,
        TEXT,
        SYSTEM,
        DISASM
    }

    private enum AppAsset {
        TERMINAL("/com/ntos/vm/ui/assets/icon-terminal.png"),
        FILES("/com/ntos/vm/ui/assets/icon-files.png"),
        CODE("/com/ntos/vm/ui/assets/icon-code.png"),
        TEXT("/com/ntos/vm/ui/assets/icon-text.png"),
        SYSTEM("/com/ntos/vm/ui/assets/icon-system.png"),
        DISASM("/com/ntos/vm/ui/assets/icon-disasm.png");

        private final String path;

        AppAsset(String path) {
            this.path = path;
        }

        private String path() {
            return path;
        }
    }

    private static Font font(String[] names, int style, int size) {
        List<String> available = List.of(GraphicsEnvironment.getLocalGraphicsEnvironment().getAvailableFontFamilyNames());
        for (String name : names) {
            if (available.contains(name)) {
                return new Font(name, style, size);
            }
        }
        return new Font(Font.SANS_SERIF, style, size);
    }

    private static BufferedImage loadImage(String path) {
        try {
            return ImageIO.read(NtDesktopApp.class.getResource(path));
        } catch (IllegalArgumentException | IOException e) {
            return null;
        }
    }

    private static final class DesktopIconButton extends JButton {
        private DesktopIconButton(String text, Icon icon) {
            super(text, icon);
            setHorizontalTextPosition(JButton.CENTER);
            setVerticalTextPosition(JButton.BOTTOM);
            setContentAreaFilled(false);
            setOpaque(false);
        }

        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics.create();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            if (getModel().isRollover()) {
                g.setColor(new Color(255, 255, 255, 22));
                g.fillRoundRect(4, 2, getWidth() - 8, getHeight() - 4, 16, 16);
            }
            g.dispose();
            super.paintComponent(graphics);
        }
    }

    private static String sampleSource() {
        return """
                function add(a, b) {
                  return a + b;
                }

                let x = 20;
                let y = 22;
                print add(x, y);
                """;
    }
}
