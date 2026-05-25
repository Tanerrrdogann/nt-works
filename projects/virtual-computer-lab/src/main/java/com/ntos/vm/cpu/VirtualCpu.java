package com.ntos.vm.cpu;

import com.ntos.vm.bytecode.Opcode;
import com.ntos.vm.memory.MemoryLayout;
import com.ntos.vm.memory.VirtualMemory;

public final class VirtualCpu {
    private final VirtualMemory memory;
    private final CpuRegisters registers = new CpuRegisters();
    private InterruptHandler interruptHandler = InterruptHandler.NO_OP;
    private boolean halted;
    private boolean preemptRequested;
    private long cycles;

    public VirtualCpu(VirtualMemory memory) {
        this.memory = memory;
    }

    public void reset(int entryPoint) {
        registers.pc(entryPoint);
        registers.sp(MemoryLayout.STACK_END);
        halted = false;
        preemptRequested = false;
        cycles = 0;
    }

    public void step() {
        if (halted) {
            return;
        }

        int instructionAddress = registers.pc();
        Opcode opcode = fetchOpcode();
        registers.instructionRegister(opcode.code());

        switch (opcode) {
            case NOP -> advance(opcode);
            case MOV_REG -> movReg(opcode);
            case MOV_IMM -> movImm(opcode);
            case LOAD -> load(opcode);
            case STORE -> store(opcode);
            case PUSH -> push(opcode);
            case POP -> pop(opcode);
            case ADD -> add(opcode);
            case SUB -> sub(opcode);
            case MUL -> mul(opcode);
            case DIV -> div(opcode);
            case CMP -> cmp(opcode);
            case JMP -> jump(readAddressOperand(1));
            case JZ -> branchIf(registers.isSet(CpuFlag.ZERO), opcode);
            case JNZ -> branchIf(!registers.isSet(CpuFlag.ZERO), opcode);
            case CALL -> call(opcode);
            case RET -> ret();
            case INT -> interrupt(opcode);
            case HALT -> {
                halted = true;
                advance(opcode);
            }
        }

        cycles++;
        checkInterrupts(instructionAddress);
    }

    public void run(int maxCycles) {
        if (maxCycles < 0) {
            throw new IllegalArgumentException("maxCycles cannot be negative");
        }
        int executed = 0;
        while (!halted && executed < maxCycles) {
            step();
            executed++;
        }
        if (!halted && executed == maxCycles) {
            throw new CpuExecutionException("CPU cycle limit reached without HALT: " + maxCycles);
        }
    }

    public int runSlice(int maxCycles) {
        if (maxCycles < 0) {
            throw new IllegalArgumentException("maxCycles cannot be negative");
        }
        int executed = 0;
        preemptRequested = false;
        while (!halted && !preemptRequested && executed < maxCycles) {
            step();
            executed++;
        }
        return executed;
    }

    public CpuSnapshot snapshot() {
        return new CpuSnapshot(
                registers.snapshotGeneral(),
                registers.pc(),
                registers.sp(),
                registers.instructionRegister(),
                registers.flags(),
                halted
        );
    }

    public void restore(CpuSnapshot snapshot) {
        registers.restoreGeneral(snapshot.generalRegisters());
        registers.pc(snapshot.pc());
        registers.sp(snapshot.sp());
        registers.instructionRegister(snapshot.instructionRegister());
        registers.flags(snapshot.flags());
        halted = snapshot.halted();
    }

    public void halt() {
        halted = true;
    }

    public void requestPreempt() {
        preemptRequested = true;
    }

    public CpuRegisters registers() {
        return registers;
    }

    public boolean halted() {
        return halted;
    }

    public long cycles() {
        return cycles;
    }

    public void interruptHandler(InterruptHandler interruptHandler) {
        this.interruptHandler = interruptHandler == null ? InterruptHandler.NO_OP : interruptHandler;
    }

    private Opcode fetchOpcode() {
        return Opcode.fromByte(memory.readByte(registers.pc()));
    }

    private void movReg(Opcode opcode) {
        int destination = readRegisterOperand(1);
        int source = readRegisterOperand(2);
        int value = registers.read(source);
        registers.write(destination, value);
        registers.updateZeroAndNegative(value);
        advance(opcode);
    }

    private void movImm(Opcode opcode) {
        int destination = readRegisterOperand(1);
        int value = readIntOperand(2);
        registers.write(destination, value);
        registers.updateZeroAndNegative(value);
        advance(opcode);
    }

    private void load(Opcode opcode) {
        int destination = readRegisterOperand(1);
        int address = readAddressOperand(2);
        int value = memory.readByte(address);
        registers.write(destination, value);
        registers.updateZeroAndNegative(value);
        advance(opcode);
    }

    private void store(Opcode opcode) {
        int source = readRegisterOperand(1);
        int address = readAddressOperand(2);
        memory.writeByte(address, registers.read(source) & 0xFF);
        advance(opcode);
    }

    private void push(Opcode opcode) {
        int source = readRegisterOperand(1);
        pushWord(registers.read(source));
        advance(opcode);
    }

    private void pop(Opcode opcode) {
        int destination = readRegisterOperand(1);
        int value = popWord();
        registers.write(destination, value);
        registers.updateZeroAndNegative(value);
        advance(opcode);
    }

    private void add(Opcode opcode) {
        int destination = readRegisterOperand(1);
        int source = readRegisterOperand(2);
        int left = registers.read(destination);
        int right = registers.read(source);
        int result = left + right;
        registers.write(destination, result);
        updateArithmeticFlags(left, right, result);
        advance(opcode);
    }

    private void sub(Opcode opcode) {
        int destination = readRegisterOperand(1);
        int source = readRegisterOperand(2);
        int left = registers.read(destination);
        int right = registers.read(source);
        int result = left - right;
        registers.write(destination, result);
        registers.updateZeroAndNegative(result);
        registers.set(CpuFlag.CARRY, Integer.compareUnsigned(left, right) < 0);
        registers.set(CpuFlag.OVERFLOW, ((left ^ right) & (left ^ result)) < 0);
        advance(opcode);
    }

    private void mul(Opcode opcode) {
        int destination = readRegisterOperand(1);
        int source = readRegisterOperand(2);
        int result = registers.read(destination) * registers.read(source);
        registers.write(destination, result);
        registers.updateZeroAndNegative(result);
        registers.set(CpuFlag.CARRY, false);
        registers.set(CpuFlag.OVERFLOW, false);
        advance(opcode);
    }

    private void div(Opcode opcode) {
        int destination = readRegisterOperand(1);
        int source = readRegisterOperand(2);
        int divisor = registers.read(source);
        if (divisor == 0) {
            throw new CpuExecutionException("Division by zero");
        }
        int result = registers.read(destination) / divisor;
        registers.write(destination, result);
        registers.updateZeroAndNegative(result);
        registers.set(CpuFlag.CARRY, false);
        registers.set(CpuFlag.OVERFLOW, false);
        advance(opcode);
    }

    private void cmp(Opcode opcode) {
        int left = registers.read(readRegisterOperand(1));
        int right = registers.read(readRegisterOperand(2));
        int result = left - right;
        registers.updateZeroAndNegative(result);
        registers.set(CpuFlag.CARRY, Integer.compareUnsigned(left, right) < 0);
        registers.set(CpuFlag.OVERFLOW, ((left ^ right) & (left ^ result)) < 0);
        advance(opcode);
    }

    private void branchIf(boolean condition, Opcode opcode) {
        if (condition) {
            jump(readAddressOperand(1));
        } else {
            advance(opcode);
        }
    }

    private void call(Opcode opcode) {
        int target = readAddressOperand(1);
        pushWord(registers.pc() + opcode.encodedLength());
        jump(target);
    }

    private void ret() {
        jump(popWord());
    }

    private void interrupt(Opcode opcode) {
        int number = memory.readByte(registers.pc() + 1);
        advance(opcode);
        interruptHandler.handleSoftwareInterrupt(number, this);
    }

    private void jump(int address) {
        registers.pc(address);
    }

    private void advance(Opcode opcode) {
        registers.pc(registers.pc() + opcode.encodedLength());
    }

    private int readRegisterOperand(int offset) {
        return memory.readByte(registers.pc() + offset);
    }

    private int readAddressOperand(int offset) {
        return memory.readWord(registers.pc() + offset);
    }

    private int readIntOperand(int offset) {
        int base = registers.pc() + offset;
        return (memory.readByte(base) << 24)
                | (memory.readByte(base + 1) << 16)
                | (memory.readByte(base + 2) << 8)
                | memory.readByte(base + 3);
    }

    private void pushWord(int value) {
        int nextSp = registers.sp() - 2;
        if (nextSp < MemoryLayout.STACK_START) {
            throw new CpuExecutionException("Stack overflow");
        }
        registers.sp(nextSp);
        memory.writeWord(nextSp, value & 0xFFFF);
    }

    private int popWord() {
        if (registers.sp() >= MemoryLayout.STACK_END) {
            throw new CpuExecutionException("Stack underflow");
        }
        int value = memory.readWord(registers.sp());
        registers.sp(registers.sp() + 2);
        return value;
    }

    private void updateArithmeticFlags(int left, int right, int result) {
        registers.updateZeroAndNegative(result);
        registers.set(CpuFlag.CARRY, Integer.compareUnsigned(result, left) < 0);
        registers.set(CpuFlag.OVERFLOW, ((left ^ result) & (right ^ result)) < 0);
    }

    private void checkInterrupts(int instructionAddress) {
        // Timer/hardware interrupts will hook here in the interrupt/MMIO phase.
    }
}
