package com.ntos.vm.os;

import com.ntos.vm.cpu.CpuSnapshot;
import com.ntos.vm.memory.MemoryLayout;

import java.util.Arrays;

public final class ProcessControlBlock {
    private final int pid;
    private ProcessState state;
    private CpuSnapshot snapshot;
    private final int codeSegmentStart;
    private final int codeSegmentSize;
    private final int dataSegmentStart;
    private final int dataSegmentSize;
    private final int heapStart;
    private final int heapLimit;
    private int heapPointer;
    private final int stackBase;
    private final int stackLimit;
    private final int priority;
    private final int timeSlice;
    private int sleepTicks;

    public ProcessControlBlock(
            int pid,
            int entryPoint,
            int codeSegmentStart,
            int codeSegmentSize,
            int dataSegmentStart,
            int dataSegmentSize,
            int heapStart,
            int heapLimit,
            int stackBase,
            int stackLimit,
            int priority,
            int timeSlice
    ) {
        this.pid = pid;
        this.state = ProcessState.NEW;
        this.snapshot = new CpuSnapshot(new int[8], entryPoint, stackBase, 0, 0, false);
        this.codeSegmentStart = codeSegmentStart;
        this.codeSegmentSize = codeSegmentSize;
        this.dataSegmentStart = dataSegmentStart;
        this.dataSegmentSize = dataSegmentSize;
        this.heapStart = heapStart;
        this.heapLimit = heapLimit;
        this.heapPointer = heapStart;
        this.stackBase = stackBase;
        this.stackLimit = stackLimit;
        this.priority = priority;
        this.timeSlice = timeSlice;
    }

    public int pid() {
        return pid;
    }

    public ProcessState state() {
        return state;
    }

    public void state(ProcessState state) {
        this.state = state;
    }

    public CpuSnapshot snapshot() {
        return snapshot;
    }

    public void snapshot(CpuSnapshot snapshot) {
        this.snapshot = snapshot;
    }

    public int pc() {
        return snapshot.pc();
    }

    public int sp() {
        return snapshot.sp();
    }

    public int[] registerSnapshot() {
        return Arrays.copyOf(snapshot.generalRegisters(), snapshot.generalRegisters().length);
    }

    public int codeSegmentStart() {
        return codeSegmentStart;
    }

    public int codeSegmentSize() {
        return codeSegmentSize;
    }

    public int dataSegmentStart() {
        return dataSegmentStart;
    }

    public int dataSegmentSize() {
        return dataSegmentSize;
    }

    public int heapStart() {
        return heapStart;
    }

    public int heapPointer() {
        return heapPointer;
    }

    public int stackBase() {
        return stackBase;
    }

    public int stackLimit() {
        return stackLimit;
    }

    public int priority() {
        return priority;
    }

    public int timeSlice() {
        return timeSlice;
    }

    public int sleepTicks() {
        return sleepTicks;
    }

    public void sleepTicks(int sleepTicks) {
        this.sleepTicks = Math.max(0, sleepTicks);
    }

    public int allocate(int size) {
        if (size <= 0) {
            size = 1;
        }
        int address = heapPointer;
        int next = heapPointer + size;
        if (next > heapLimit || next > MemoryLayout.HEAP_END) {
            throw new IllegalStateException("Process " + pid + " heap exhausted");
        }
        heapPointer = next;
        return address;
    }
}
