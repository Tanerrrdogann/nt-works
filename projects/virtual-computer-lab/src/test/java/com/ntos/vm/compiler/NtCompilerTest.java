package com.ntos.vm.compiler;

import com.ntos.vm.cpu.VirtualCpu;
import com.ntos.vm.loader.LoadedProgram;
import com.ntos.vm.loader.NtbinLoader;
import com.ntos.vm.memory.VirtualMemory;
import com.ntos.vm.os.NTOperatingSystem;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class NtCompilerTest {
    @Test
    void compilesLetPrintProgramToExecutableNtbin() {
        String source = """
                let x = 5;
                let y = 10;
                print x + y;
                """;

        ExecutionResult result = compileAndRun(source);

        assertEquals(List.of(15), result.printed);
        assertEquals(15, result.cpu.registers().read(0));
    }

    @Test
    void compilesFunctionCallAndReturn() {
        String source = """
                function add(a, b) {
                  return a + b;
                }

                print add(3, 4);
                """;

        ExecutionResult result = compileAndRun(source);

        assertEquals(List.of(7), result.printed);
        assertEquals(7, result.cpu.registers().read(0));
    }

    @Test
    void compilesWhileAndIfControlFlow() {
        String source = """
                let x = 0;
                while (x == 0) {
                  x = x + 1;
                }
                if (x == 1) {
                  print 42;
                } else {
                  print 13;
                }
                """;

        ExecutionResult result = compileAndRun(source);

        assertEquals(List.of(42), result.printed);
    }

    @Test
    void rejectsUndefinedVariables() {
        NtCompiler compiler = new NtCompiler();

        assertThrows(CompileException.class, () -> compiler.compileSource("print missing;"));
    }

    @Test
    void rejectsWrongFunctionArity() {
        NtCompiler compiler = new NtCompiler();
        String source = """
                function add(a, b) {
                  return a + b;
                }
                print add(1);
                """;

        assertThrows(CompileException.class, () -> compiler.compileSource(source));
    }

    @Test
    void compilesStringPrintAndArrayIndex() {
        String source = """
                let xs = [4, 8, 15, 16];
                print "ok";
                print xs[2];
                """;

        CompiledProgram compiled = new NtCompiler().compileSource(source);
        NTOperatingSystem os = new NTOperatingSystem();
        NtbinLoader loader = new NtbinLoader();
        LoadedProgram loaded = loader.load(loader.read(compiled.ntbin()), os.memory());
        os.createProcess(loaded);
        os.runScheduler(1_000);

        assertEquals("ok\n", os.terminalDevice().output());
        assertEquals(List.of(15), os.printedValues());
    }

    @Test
    void compilesNumberAndStringInput() {
        String source = """
                print input_string();
                let grade = input_number();
                print grade + 5;
                """;

        CompiledProgram compiled = new NtCompiler().compileSource(source);
        NTOperatingSystem os = new NTOperatingSystem();
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, 'A');
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, 'y');
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, 's');
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, 'e');
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, '\n');
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, '8');
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, '5');
        os.keyboardDevice().write(com.ntos.vm.device.KeyboardDevice.INPUT, '\n');
        NtbinLoader loader = new NtbinLoader();
        LoadedProgram loaded = loader.load(loader.read(compiled.ntbin()), os.memory());
        os.createProcess(loaded);
        os.runScheduler(1_000);

        assertEquals("Ayse\n", os.terminalDevice().output());
        assertEquals(List.of(90), os.printedValues());
    }

    private static ExecutionResult compileAndRun(String source) {
        CompiledProgram compiled = new NtCompiler().compileSource(source);
        VirtualMemory memory = new VirtualMemory();
        NtbinLoader loader = new NtbinLoader();
        LoadedProgram loaded = loader.load(loader.read(compiled.ntbin()), memory);
        VirtualCpu cpu = new VirtualCpu(memory);
        List<Integer> printed = new ArrayList<>();
        cpu.interruptHandler((number, currentCpu) -> {
            if (number == 1) {
                printed.add(currentCpu.registers().read(0));
            }
        });
        cpu.reset(loaded.entryPoint());
        cpu.run(1_000);
        return new ExecutionResult(cpu, printed);
    }

    private record ExecutionResult(VirtualCpu cpu, List<Integer> printed) {
    }
}
