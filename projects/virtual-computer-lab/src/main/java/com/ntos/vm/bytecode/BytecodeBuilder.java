package com.ntos.vm.bytecode;

import java.io.ByteArrayOutputStream;

public final class BytecodeBuilder {
    private final ByteArrayOutputStream output = new ByteArrayOutputStream();

    public BytecodeBuilder opcode(Opcode opcode) {
        output.write(opcode.byteCode());
        return this;
    }

    public BytecodeBuilder reg(int register) {
        requireRegister(register);
        output.write(register);
        return this;
    }

    public BytecodeBuilder address(int address) {
        requireUnsignedWord(address, "address");
        output.write((address >>> 8) & 0xFF);
        output.write(address & 0xFF);
        return this;
    }

    public BytecodeBuilder int32(int value) {
        output.write((value >>> 24) & 0xFF);
        output.write((value >>> 16) & 0xFF);
        output.write((value >>> 8) & 0xFF);
        output.write(value & 0xFF);
        return this;
    }

    public BytecodeBuilder nop() {
        return opcode(Opcode.NOP);
    }

    public BytecodeBuilder movReg(int destination, int source) {
        return opcode(Opcode.MOV_REG).reg(destination).reg(source);
    }

    public BytecodeBuilder movImm(int destination, int value) {
        return opcode(Opcode.MOV_IMM).reg(destination).int32(value);
    }

    public BytecodeBuilder load(int destination, int address) {
        return opcode(Opcode.LOAD).reg(destination).address(address);
    }

    public BytecodeBuilder store(int source, int address) {
        return opcode(Opcode.STORE).reg(source).address(address);
    }

    public BytecodeBuilder push(int source) {
        return opcode(Opcode.PUSH).reg(source);
    }

    public BytecodeBuilder pop(int destination) {
        return opcode(Opcode.POP).reg(destination);
    }

    public BytecodeBuilder add(int destination, int source) {
        return opcode(Opcode.ADD).reg(destination).reg(source);
    }

    public BytecodeBuilder sub(int destination, int source) {
        return opcode(Opcode.SUB).reg(destination).reg(source);
    }

    public BytecodeBuilder mul(int destination, int source) {
        return opcode(Opcode.MUL).reg(destination).reg(source);
    }

    public BytecodeBuilder div(int destination, int source) {
        return opcode(Opcode.DIV).reg(destination).reg(source);
    }

    public BytecodeBuilder cmp(int left, int right) {
        return opcode(Opcode.CMP).reg(left).reg(right);
    }

    public BytecodeBuilder jmp(int address) {
        return opcode(Opcode.JMP).address(address);
    }

    public BytecodeBuilder jz(int address) {
        return opcode(Opcode.JZ).address(address);
    }

    public BytecodeBuilder jnz(int address) {
        return opcode(Opcode.JNZ).address(address);
    }

    public BytecodeBuilder call(int address) {
        return opcode(Opcode.CALL).address(address);
    }

    public BytecodeBuilder ret() {
        return opcode(Opcode.RET);
    }

    public BytecodeBuilder interrupt(int number) {
        if (number < 0 || number > 0xFF) {
            throw new IllegalArgumentException("interrupt number must fit in one byte");
        }
        output.write(Opcode.INT.byteCode());
        output.write(number);
        return this;
    }

    public BytecodeBuilder halt() {
        return opcode(Opcode.HALT);
    }

    public byte[] toByteArray() {
        return output.toByteArray();
    }

    private static void requireRegister(int register) {
        if (register < 0 || register > 7) {
            throw new IllegalArgumentException("register must be R0-R7: " + register);
        }
    }

    private static void requireUnsignedWord(int value, String label) {
        if (value < 0 || value > 0xFFFF) {
            throw new IllegalArgumentException(label + " must fit in 16 bits");
        }
    }
}
