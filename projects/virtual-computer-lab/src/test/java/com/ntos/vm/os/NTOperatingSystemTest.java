package com.ntos.vm.os;

import com.ntos.vm.bytecode.BytecodeBuilder;
import com.ntos.vm.loader.LoadedProgram;
import com.ntos.vm.loader.NtbinLoader;
import com.ntos.vm.loader.NtbinWriter;
import com.ntos.vm.memory.MemoryLayout;
import com.ntos.vm.memory.VirtualMemory;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class NTOperatingSystemTest {
    @Test
    void runsMultipleProcessesWithRoundRobinYieldAndSyscalls() {
        NTOperatingSystem os = new NTOperatingSystem();
        LoadedProgram program = load(os.memory(), new BytecodeBuilder()
                .interrupt(Syscall.GETPID.number())
                .interrupt(Syscall.PRINT.number())
                .interrupt(Syscall.YIELD.number())
                .interrupt(Syscall.GETPID.number())
                .interrupt(Syscall.PRINT.number())
                .interrupt(Syscall.EXIT.number())
                .halt()
                .toByteArray());

        ProcessControlBlock first = os.createProcess(program, 1, 20);
        ProcessControlBlock second = os.createProcess(program, 1, 20);
        os.runScheduler(100);

        assertEquals(List.of(1, 2, 1, 2), os.printedValues());
        assertEquals(ProcessState.TERMINATED, first.state());
        assertEquals(ProcessState.TERMINATED, second.state());
    }

    @Test
    void allocSyscallMovesRealVirtualHeapPointer() {
        NTOperatingSystem os = new NTOperatingSystem();
        LoadedProgram program = load(os.memory(), new BytecodeBuilder()
                .movImm(0, 8)
                .interrupt(Syscall.ALLOC.number())
                .interrupt(Syscall.EXIT.number())
                .halt()
                .toByteArray());

        ProcessControlBlock process = os.createProcess(program);
        int heapStart = process.heapStart();
        os.runScheduler(50);

        assertEquals(heapStart + 8, process.heapPointer());
        assertEquals(heapStart, process.registerSnapshot()[0]);
    }

    @Test
    void timerTicksAdvanceDuringScheduledExecution() {
        NTOperatingSystem os = new NTOperatingSystem();
        LoadedProgram program = load(os.memory(), new BytecodeBuilder()
                .movImm(0, 1)
                .movImm(1, 2)
                .add(0, 1)
                .interrupt(Syscall.EXIT.number())
                .halt()
                .toByteArray());

        os.createProcess(program, 1, 2);
        os.runScheduler(50);

        assertTrue(os.timerDevice().ticks() > 0);
    }

    private LoadedProgram load(VirtualMemory memory, byte[] code) {
        byte[] file = new NtbinWriter().write(MemoryLayout.USER_START, code, new byte[0]);
        NtbinLoader loader = new NtbinLoader();
        return loader.load(loader.read(file), memory);
    }
}
