package com.ntos.vm.debug;

import com.ntos.vm.bytecode.BytecodeBuilder;
import com.ntos.vm.loader.LoadedProgram;
import com.ntos.vm.loader.NtbinLoader;
import com.ntos.vm.loader.NtbinWriter;
import com.ntos.vm.memory.MemoryLayout;
import com.ntos.vm.os.NTOperatingSystem;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

class DebugToolsTest {
    @Test
    void disassemblesBytecodeInstructions() {
        NTOperatingSystem os = new NTOperatingSystem();
        byte[] code = new BytecodeBuilder()
                .movImm(1, 65)
                .store(1, 0xFF01)
                .halt()
                .toByteArray();
        os.memory().loadBytes(MemoryLayout.USER_START, code);

        List<String> lines = new Disassembler().disassemble(os.memory(), MemoryLayout.USER_START, code.length);

        assertTrue(lines.get(0).contains("MOV_IMM R1, 65"));
        assertTrue(lines.get(1).contains("STORE R1, 0xFF01"));
    }

    @Test
    void shellReportsProcessesDevicesMemoryAndDisassembly() {
        NTOperatingSystem os = new NTOperatingSystem();
        byte[] code = new BytecodeBuilder().halt().toByteArray();
        byte[] file = new NtbinWriter().write(MemoryLayout.USER_START, code, new byte[0]);
        NtbinLoader loader = new NtbinLoader();
        LoadedProgram program = loader.load(loader.read(file), os.memory());
        os.createProcess(program);
        DebugShell shell = new DebugShell(os);

        assertTrue(shell.execute("ps").contains("pid=1"));
        assertTrue(shell.execute("devices").contains("NT_TTY"));
        assertTrue(shell.execute("mem 0x2000 1").contains("FF"));
        assertTrue(shell.execute("disasm 0x2000 1").contains("HALT"));
    }
}
