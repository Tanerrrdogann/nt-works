package com.ntos.vm.ui;

import com.ntos.vm.compiler.CompiledProgram;
import com.ntos.vm.compiler.NtCompiler;
import com.ntos.vm.debug.DebugShell;
import com.ntos.vm.debug.Disassembler;
import com.ntos.vm.loader.LoadedProgram;
import com.ntos.vm.loader.NtbinLoader;
import com.ntos.vm.os.NTOperatingSystem;
import com.ntos.vm.os.ProcessControlBlock;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Collectors;

public final class NtDesktopSession {
    private static final int MAX_TICKS = 5_000;

    private NTOperatingSystem os = new NTOperatingSystem();
    private LoadedProgram lastProgram;
    private ProcessControlBlock lastProcess;
    private Path lastBinaryPath;

    public RunResult compileAndRun(String source, Path outputPath) throws IOException {
        return compileAndRun(source, outputPath, "");
    }

    public RunResult compileAndRun(String source, Path outputPath, String keyboardInput) throws IOException {
        CompiledProgram compiled = new NtCompiler().compileSource(source);
        Files.createDirectories(outputPath.getParent());
        Files.write(outputPath, compiled.ntbin());
        return runBinary(outputPath, keyboardInput);
    }

    public RunResult runBinary(Path path) throws IOException {
        return runBinary(path, "");
    }

    public RunResult runBinary(Path path, String keyboardInput) throws IOException {
        os = new NTOperatingSystem();
        for (int i = 0; i < keyboardInput.length(); i++) {
            os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, keyboardInput.charAt(i));
        }
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, 0);
        lastBinaryPath = path;
        lastProgram = os.loadProgram(path);
        lastProcess = os.createProcess(lastProgram);
        os.runScheduler(MAX_TICKS);
        return new RunResult(
                os.printedValues(),
                os.terminalDevice().output(),
                statusText(),
                disassembly()
        );
    }

    public String shell(String command) {
        return new DebugShell(os).execute(command);
    }

    public String statusText() {
        String processText = os.processTable().stream()
                .map(process -> "pid=%d state=%s pc=0x%04X sp=0x%04X heap=0x%04X"
                        .formatted(process.pid(), process.state(), process.pc(), process.sp(), process.heapPointer()))
                .collect(Collectors.joining(System.lineSeparator()));
        if (processText.isBlank()) {
            processText = "no process loaded";
        }
        return """
                NT_os status
                loaded=%s
                printed=%s
                terminal=%s
                timerTicks=%d
                devices=%s

                %s
                """.formatted(
                lastBinaryPath == null ? "none" : lastBinaryPath,
                os.printedValues(),
                os.terminalDevice().output().isBlank() ? "(empty)" : os.terminalDevice().output(),
                os.timerDevice().ticks(),
                String.join(", ", os.memory().deviceNames()),
                processText
        );
    }

    public String disassembly() {
        if (lastProgram == null) {
            return "no program loaded";
        }
        return String.join(System.lineSeparator(), new Disassembler()
                .disassemble(os.memory(), lastProgram.codeStart(), lastProgram.codeSize()));
    }

    public List<Path> listExampleFiles(Path examplesDir) throws IOException {
        if (!Files.exists(examplesDir)) {
            return List.of();
        }
        try (var stream = Files.list(examplesDir)) {
            return stream
                    .filter(path -> Files.isRegularFile(path) && isNtFile(path))
                    .sorted()
                    .toList();
        }
    }

    public String readText(Path path) throws IOException {
        return Files.readString(path);
    }

    private boolean isNtFile(Path path) {
        String name = path.getFileName().toString();
        return name.endsWith(".nt") || name.endsWith(".ntbin") || name.endsWith(".md");
    }

    public record RunResult(
            List<Integer> printedValues,
            String terminalOutput,
            String statusText,
            String disassembly
    ) {
        public String terminalText() {
            String printed = printedValues.stream()
                    .map(value -> "print: " + value)
                    .collect(Collectors.joining(System.lineSeparator()));
            if (!terminalOutput.isBlank()) {
                printed = printed.isBlank() ? terminalOutput : printed + System.lineSeparator() + terminalOutput;
            }
            return printed.isBlank() ? "(program produced no output)" : printed;
        }
    }
}
