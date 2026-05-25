package com.ntos.vm.bytecode;

import java.util.Arrays;

public enum Opcode {
    NOP(0x00, 1),
    MOV_REG(0x10, 3),
    MOV_IMM(0x11, 6),
    LOAD(0x20, 4),
    STORE(0x21, 4),
    PUSH(0x30, 2),
    POP(0x31, 2),
    ADD(0x40, 3),
    SUB(0x41, 3),
    MUL(0x42, 3),
    DIV(0x43, 3),
    CMP(0x50, 3),
    JMP(0x60, 3),
    JZ(0x61, 3),
    JNZ(0x62, 3),
    CALL(0x70, 3),
    RET(0x71, 1),
    INT(0x80, 2),
    HALT(0xFF, 1);

    private final int code;
    private final int encodedLength;

    Opcode(int code, int encodedLength) {
        this.code = code;
        this.encodedLength = encodedLength;
    }

    public int code() {
        return code;
    }

    public byte byteCode() {
        return (byte) code;
    }

    public int encodedLength() {
        return encodedLength;
    }

    public static Opcode fromByte(int value) {
        int unsigned = value & 0xFF;
        return Arrays.stream(values())
                .filter(opcode -> opcode.code == unsigned)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown opcode: 0x%02X".formatted(unsigned)));
    }
}
