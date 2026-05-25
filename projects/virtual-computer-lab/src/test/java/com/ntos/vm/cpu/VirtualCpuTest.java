package com.ntos.vm.cpu;

import com.ntos.vm.bytecode.BytecodeBuilder;
import com.ntos.vm.loader.NtbinWriter;
import com.ntos.vm.loader.ProgramImage;
import com.ntos.vm.loader.NtbinLoader;
import com.ntos.vm.memory.MemoryLayout;
import com.ntos.vm.memory.VirtualMemory;
import org.junit.jupiter.api.Test;

import java.util.concurrent.atomic.AtomicInteger;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class VirtualCpuTest {
    @Test
    void executesArithmeticAndStoreLoadProgram() {
        VirtualMemory memory = new VirtualMemory();
        int dataAddress = MemoryLayout.USER_START + 0x100;
        byte[] code = new BytecodeBuilder()
                .movImm(0, 7)
                .movImm(1, 8)
                .add(0, 1)
                .store(0, dataAddress)
                .load(2, dataAddress)
                .halt()
                .toByteArray();
        load(memory, code);

        VirtualCpu cpu = new VirtualCpu(memory);
        cpu.reset(MemoryLayout.USER_START);
        cpu.run(100);

        assertTrue(cpu.halted());
        assertEquals(15, cpu.registers().read(0));
        assertEquals(15, cpu.registers().read(2));
        assertEquals(15, memory.readByte(dataAddress));
    }

    @Test
    void jumpsUsingComparisonFlags() {
        VirtualMemory memory = new VirtualMemory();
        int successAddress = MemoryLayout.USER_START + 25;
        byte[] code = new BytecodeBuilder()
                .movImm(0, 5)
                .movImm(1, 5)
                .cmp(0, 1)
                .jz(successAddress)
                .movImm(2, 99)
                .halt()
                .movImm(2, 42)
                .halt()
                .toByteArray();
        load(memory, code);

        VirtualCpu cpu = new VirtualCpu(memory);
        cpu.reset(MemoryLayout.USER_START);
        cpu.run(100);

        assertEquals(42, cpu.registers().read(2));
    }

    @Test
    void callAndReturnUseRealStackMemory() {
        VirtualMemory memory = new VirtualMemory();
        int functionAddress = MemoryLayout.USER_START + 10;
        byte[] code = new BytecodeBuilder()
                .movImm(0, 2)
                .call(functionAddress)
                .halt()
                .movImm(1, 40)
                .add(0, 1)
                .ret()
                .toByteArray();
        load(memory, code);

        VirtualCpu cpu = new VirtualCpu(memory);
        cpu.reset(MemoryLayout.USER_START);
        int initialSp = cpu.registers().sp();
        cpu.run(100);

        assertEquals(42, cpu.registers().read(0));
        assertEquals(initialSp, cpu.registers().sp());
        assertTrue(cpu.halted());
    }

    @Test
    void softwareInterruptCallsHandler() {
        VirtualMemory memory = new VirtualMemory();
        byte[] code = new BytecodeBuilder()
                .interrupt(7)
                .halt()
                .toByteArray();
        load(memory, code);

        AtomicInteger interruptNumber = new AtomicInteger(-1);
        VirtualCpu cpu = new VirtualCpu(memory);
        cpu.interruptHandler((number, ignored) -> interruptNumber.set(number));
        cpu.reset(MemoryLayout.USER_START);
        cpu.run(10);

        assertEquals(7, interruptNumber.get());
        assertFalse(cpu.registers().isSet(CpuFlag.ZERO));
    }

    private static void load(VirtualMemory memory, byte[] code) {
        byte[] file = new NtbinWriter().write(MemoryLayout.USER_START, code, new byte[0]);
        ProgramImage image = new NtbinLoader().read(file);
        new NtbinLoader().load(image, memory);
    }
}
