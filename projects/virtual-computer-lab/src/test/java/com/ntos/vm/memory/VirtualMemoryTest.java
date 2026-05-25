package com.ntos.vm.memory;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class VirtualMemoryTest {
    @Test
    void readsAndWritesBytesAndWords() {
        VirtualMemory memory = new VirtualMemory();

        memory.writeByte(MemoryLayout.USER_START, 0xAB);
        memory.writeWord(MemoryLayout.USER_START + 1, 0x1234);

        assertEquals(0xAB, memory.readByte(MemoryLayout.USER_START));
        assertEquals(0x1234, memory.readWord(MemoryLayout.USER_START + 1));
        assertArrayEquals(new byte[]{(byte) 0xAB, 0x12, 0x34}, memory.dump(MemoryLayout.USER_START, 3));
    }

    @Test
    void deniesWritesToOsReservedRegion() {
        VirtualMemory memory = new VirtualMemory();

        assertThrows(MemoryAccessException.class, () -> memory.writeByte(MemoryLayout.OS_START, 1));
    }

    @Test
    void rejectsOutOfBoundsAccess() {
        VirtualMemory memory = new VirtualMemory();

        assertThrows(MemoryAccessException.class, () -> memory.readByte(MemoryLayout.SIZE));
    }
}
