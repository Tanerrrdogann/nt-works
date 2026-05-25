package com.ntos.vm.loader;

import com.ntos.vm.bytecode.Opcode;
import com.ntos.vm.memory.MemoryLayout;
import com.ntos.vm.memory.VirtualMemory;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class NtbinLoaderTest {
    @Test
    void readsAndLoadsNtbinProgramIntoUserMemory() {
        byte[] code = {Opcode.NOP.byteCode(), Opcode.HALT.byteCode()};
        byte[] data = {0x12, 0x34};
        byte[] file = new NtbinWriter().write(MemoryLayout.USER_START, code, data);

        NtbinLoader loader = new NtbinLoader();
        ProgramImage image = loader.read(file);
        VirtualMemory memory = new VirtualMemory();
        LoadedProgram loaded = loader.load(image, memory);

        assertEquals(MemoryLayout.USER_START, loaded.entryPoint());
        assertEquals(Opcode.NOP.code(), memory.readByte(MemoryLayout.USER_START));
        assertEquals(Opcode.HALT.code(), memory.readByte(MemoryLayout.USER_START + 1));
        assertEquals(0x12, memory.readByte(MemoryLayout.USER_START + code.length));
        assertEquals(0x34, memory.readByte(MemoryLayout.USER_START + code.length + 1));
    }

    @Test
    void rejectsInvalidMagic() {
        byte[] code = {Opcode.HALT.byteCode()};
        byte[] file = new NtbinWriter().write(MemoryLayout.USER_START, code, new byte[0]);
        file[0] = 0x00;

        assertThrows(NtbinLoadException.class, () -> new NtbinLoader().read(file));
    }
}
