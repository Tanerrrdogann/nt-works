package com.ntos.vm.device;

import com.ntos.vm.bytecode.BytecodeBuilder;
import com.ntos.vm.cpu.VirtualCpu;
import com.ntos.vm.memory.MemoryLayout;
import com.ntos.vm.memory.VirtualMemory;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MmioDeviceTest {
    @Test
    void storeToTerminalOutputRegisterWritesCharacter() {
        VirtualMemory memory = new VirtualMemory();
        TerminalDevice terminal = new TerminalDevice();
        memory.attachDevice(terminal);
        byte[] code = new BytecodeBuilder()
                .movImm(0, 'A')
                .store(0, TerminalDevice.OUTPUT)
                .halt()
                .toByteArray();
        memory.loadBytes(MemoryLayout.USER_START, code);

        VirtualCpu cpu = new VirtualCpu(memory);
        cpu.reset(MemoryLayout.USER_START);
        cpu.run(20);

        assertEquals("A", terminal.output());
    }
}
