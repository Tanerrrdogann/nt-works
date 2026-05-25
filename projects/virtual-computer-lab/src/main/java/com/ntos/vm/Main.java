package com.ntos.vm;

import com.ntos.vm.compiler.CompiledProgram;
import com.ntos.vm.compiler.NtCompiler;
import com.ntos.vm.debug.DebugShell;
import com.ntos.vm.loader.LoadedProgram;
import com.ntos.vm.os.NTOperatingSystem;
import com.ntos.vm.os.ProcessControlBlock;
import com.ntos.vm.ui.NtDesktopApp;

import java.awt.GraphicsEnvironment;
import java.nio.file.Files;
import java.nio.file.Path;

public final class Main {
    private Main() {
    }

    public static void main(String[] args) throws Exception {
        if (args.length == 0 && !GraphicsEnvironment.isHeadless()) {
            NtDesktopApp.launch();
            return;
        }
        if (args.length > 0 && "--gui".equals(args[0])) {
            NtDesktopApp.launch();
            return;
        }
        if (args.length > 0 && "--cli".equals(args[0])) {
            args = java.util.Arrays.copyOfRange(args, 1, args.length);
        }
        runCli(args);
    }

    private static void runCli(String[] args) throws Exception {
        NTOperatingSystem os = new NTOperatingSystem();
        Path programPath = args.length == 0 ? createDemoProgram() : prepareProgram(Path.of(args[0]));
        LoadedProgram program = os.loadProgram(programPath);

        System.out.println(NTOperatingSystem.NAME + " loaded " + programPath);
        System.out.printf("entry=0x%04X code=0x%04X..0x%04X data=0x%04X..0x%04X%n",
                program.entryPoint(),
                program.codeStart(),
                program.codeStart() + program.codeSize(),
                program.dataStart(),
                program.dataStart() + program.dataSize());
        System.out.printf("first opcode at entry: 0x%02X%n", os.memory().readByte(program.entryPoint()));

        ProcessControlBlock process = os.createProcess(program);
        os.runScheduler(5_000);
        for (Integer value : os.printedValues()) {
            System.out.println("print: " + value);
        }

        System.out.printf("cpu halted=%s cycles=%d R0=%d R1=%d PC=0x%04X SP=0x%04X FLAGS=0x%02X%n",
                os.cpu().halted(),
                os.cpu().cycles(),
                os.cpu().registers().read(0),
                os.cpu().registers().read(1),
                os.cpu().registers().pc(),
                os.cpu().registers().sp(),
                os.cpu().registers().flags());
        System.out.println("process: pid=%d state=%s heap=0x%04X".formatted(
                process.pid(),
                process.state(),
                process.heapPointer()));
        System.out.println(new DebugShell(os).execute("devices"));
    }

    private static Path createDemoProgram() throws Exception {
        String source = """
                function add(a, b) {
                  return a + b;
                }

                let x = 20;
                let y = 22;
                print add(x, y);
                """;
        Path sourcePath = Path.of("examples/hello.nt");
        Files.createDirectories(sourcePath.getParent());
        Files.writeString(sourcePath, source);
        return compileSource(sourcePath);
    }

    private static Path prepareProgram(Path input) throws Exception {
        if (input.toString().endsWith(".nt")) {
            return compileSource(input);
        }
        return input;
    }

    private static Path compileSource(Path sourcePath) throws Exception {
        CompiledProgram compiled = new NtCompiler().compileSource(Files.readString(sourcePath));
        Path output = Path.of(sourcePath.toString().replaceFirst("\\.nt$", ".ntbin"));
        Files.createDirectories(output.getParent());
        Files.write(output, compiled.ntbin());
        return output;
    }
}
