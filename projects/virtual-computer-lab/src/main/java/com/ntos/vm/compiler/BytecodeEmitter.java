package com.ntos.vm.compiler;

import com.ntos.vm.bytecode.Opcode;

import java.io.ByteArrayOutputStream;

final class BytecodeEmitter {
    private final ByteArrayOutputStream output = new ByteArrayOutputStream();

    int position() {
        return output.size();
    }

    void opcode(Opcode opcode) {
        byteValue(opcode.code());
    }

    void byteValue(int value) {
        output.write(value & 0xFF);
    }

    void word(int value) {
        output.write((value >>> 8) & 0xFF);
        output.write(value & 0xFF);
    }

    void int32(int value) {
        output.write((value >>> 24) & 0xFF);
        output.write((value >>> 16) & 0xFF);
        output.write((value >>> 8) & 0xFF);
        output.write(value & 0xFF);
    }

    int emitJump(Opcode opcode) {
        opcode(opcode);
        int patchPosition = position();
        word(0);
        return patchPosition;
    }

    int emitRegisterAddress(Opcode opcode, int register) {
        opcode(opcode);
        byteValue(register);
        int patchPosition = position();
        word(0);
        return patchPosition;
    }

    void patchWord(int position, int value) {
        byte[] bytes = output.toByteArray();
        bytes[position] = (byte) ((value >>> 8) & 0xFF);
        bytes[position + 1] = (byte) (value & 0xFF);
        output.reset();
        output.writeBytes(bytes);
    }

    byte[] toByteArray() {
        return output.toByteArray();
    }
}
