package com.ntos.vm.ui;

import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.concurrent.atomic.AtomicReference;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

class NtDesktopSessionTest {
    @Test
    void compilesRunsAndReportsDesktopSessionState() throws Exception {
        NtDesktopSession session = new NtDesktopSession();
        Path output = Files.createTempDirectory("ntos-ui-test").resolve("program.ntbin");

        NtDesktopSession.RunResult result = session.compileAndRun("""
                let x = 40;
                let y = 2;
                print x + y;
                """, output);

        assertTrue(Files.exists(output));
        assertTrue(result.terminalText().contains("print: 42"));
        assertTrue(result.statusText().contains("pid=1"));
        assertTrue(result.disassembly().contains("MOV_IMM"));
        assertTrue(session.shell("devices").contains("NT_TTY"));
    }

    @Test
    void terminalProtectsPromptPrefix() throws Exception {
        AtomicReference<String> command = new AtomicReference<>();
        TerminalConsole terminal = new TerminalConsole(input -> {
            command.set(input);
            return "ok";
        });

        terminal.getDocument().remove(0, 5);
        terminal.append("regs");

        assertTrue(terminal.getText().contains(TerminalConsole.PROMPT));
        assertTrue(terminal.getText().endsWith("regs"));
        assertEquals(null, command.get());
    }
}
