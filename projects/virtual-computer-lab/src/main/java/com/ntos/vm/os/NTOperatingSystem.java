package com.ntos.vm.os;

import com.ntos.vm.cpu.VirtualCpu;
import com.ntos.vm.device.KeyboardDevice;
import com.ntos.vm.device.LedDevice;
import com.ntos.vm.device.TerminalDevice;
import com.ntos.vm.device.TimerDevice;
import com.ntos.vm.loader.LoadedProgram;
import com.ntos.vm.loader.NtbinLoader;
import com.ntos.vm.memory.VirtualMemory;

import java.io.IOException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public final class NTOperatingSystem {
    public static final String NAME = "NT_os";
    public static final int DEFAULT_TIME_SLICE = 4;

    private final VirtualMemory memory;
    private final NtbinLoader loader;
    private final VirtualCpu cpu;
    private final RoundRobinScheduler scheduler = new RoundRobinScheduler();
    private final List<ProcessControlBlock> processTable = new ArrayList<>();
    private final List<Integer> printedValues = new ArrayList<>();
    private final TerminalDevice terminalDevice = new TerminalDevice();
    private final KeyboardDevice keyboardDevice = new KeyboardDevice();
    private final TimerDevice timerDevice = new TimerDevice();
    private final LedDevice ledDevice = new LedDevice();
    private ProcessControlBlock runningProcess;
    private int nextPid = 1;

    public NTOperatingSystem() {
        this(new VirtualMemory(), new NtbinLoader());
    }

    public NTOperatingSystem(VirtualMemory memory, NtbinLoader loader) {
        this.memory = memory;
        this.loader = loader;
        this.cpu = new VirtualCpu(memory);
        this.cpu.interruptHandler(this::handleSyscall);
        this.memory.attachDevice(terminalDevice);
        this.memory.attachDevice(keyboardDevice);
        this.memory.attachDevice(timerDevice);
        this.memory.attachDevice(ledDevice);
    }

    public LoadedProgram loadProgram(Path path) throws IOException {
        return loader.load(path, memory);
    }

    public ProcessControlBlock createProcess(LoadedProgram program) {
        return createProcess(program, 1, DEFAULT_TIME_SLICE);
    }

    public ProcessControlBlock createProcess(LoadedProgram program, int priority, int timeSlice) {
        int pid = nextPid++;
        int heapStart = 0x8000 + ((pid - 1) * 0x0400);
        int heapLimit = Math.min(heapStart + 0x0400, 0xC000);
        int stackBase = 0xFF00 - ((pid - 1) * 0x0400);
        int stackLimit = Math.max(stackBase - 0x0400, 0xC000);
        ProcessControlBlock process = new ProcessControlBlock(
                pid,
                program.entryPoint(),
                program.codeStart(),
                program.codeSize(),
                program.dataStart(),
                program.dataSize(),
                heapStart,
                heapLimit,
                stackBase,
                stackLimit,
                priority,
                timeSlice
        );
        process.state(ProcessState.READY);
        processTable.add(process);
        return process;
    }

    public void runScheduler(int maxTicks) {
        int ticks = 0;
        while (ticks < maxTicks && hasRunnableWork()) {
            wakeSleepingProcesses();
            ProcessControlBlock process = scheduler.next(processTable);
            if (process == null) {
                ticks++;
                timerDevice.tick();
                continue;
            }

            runningProcess = process;
            process.state(ProcessState.RUNNING);
            cpu.restore(process.snapshot());
            int executed = cpu.runSlice(process.timeSlice());
            ticks += executed;
            for (int i = 0; i < executed; i++) {
                timerDevice.tick();
            }

            process.snapshot(cpu.snapshot());
            if (cpu.halted() || process.state() == ProcessState.TERMINATED) {
                process.state(ProcessState.TERMINATED);
            } else if (process.state() == ProcessState.RUNNING) {
                process.state(ProcessState.READY);
            }
            runningProcess = null;
        }
    }

    public VirtualMemory memory() {
        return memory;
    }

    public List<ProcessControlBlock> processTable() {
        return List.copyOf(processTable);
    }

    public List<Integer> printedValues() {
        return List.copyOf(printedValues);
    }

    public TerminalDevice terminalDevice() {
        return terminalDevice;
    }

    public KeyboardDevice keyboardDevice() {
        return keyboardDevice;
    }

    public TimerDevice timerDevice() {
        return timerDevice;
    }

    public LedDevice ledDevice() {
        return ledDevice;
    }

    public VirtualCpu cpu() {
        return cpu;
    }

    private void handleSyscall(int number, VirtualCpu currentCpu) {
        Syscall syscall = Syscall.fromNumber(number);
        switch (syscall) {
            case PRINT -> printedValues.add(currentCpu.registers().read(0));
            case EXIT -> {
                if (runningProcess != null) {
                    runningProcess.state(ProcessState.TERMINATED);
                }
                currentCpu.halt();
            }
            case SLEEP -> {
                if (runningProcess != null) {
                    runningProcess.sleepTicks(Math.max(1, currentCpu.registers().read(0)));
                    runningProcess.state(ProcessState.WAITING);
                }
                currentCpu.requestPreempt();
            }
            case ALLOC -> {
                if (runningProcess == null) {
                    throw new IllegalStateException("alloc syscall requires a running process");
                }
                int address = runningProcess.allocate(currentCpu.registers().read(0));
                currentCpu.registers().write(0, address);
            }
            case GETPID -> {
                if (runningProcess == null) {
                    currentCpu.registers().write(0, 0);
                } else {
                    currentCpu.registers().write(0, runningProcess.pid());
                }
            }
            case YIELD -> {
                if (runningProcess != null) {
                    runningProcess.state(ProcessState.READY);
                }
                currentCpu.requestPreempt();
            }
        }
    }

    private void wakeSleepingProcesses() {
        for (ProcessControlBlock process : processTable) {
            if (process.state() == ProcessState.WAITING) {
                process.sleepTicks(process.sleepTicks() - 1);
                if (process.sleepTicks() == 0) {
                    process.state(ProcessState.READY);
                }
            }
        }
    }

    private boolean hasRunnableWork() {
        return processTable.stream().anyMatch(process -> process.state() != ProcessState.TERMINATED);
    }
}
