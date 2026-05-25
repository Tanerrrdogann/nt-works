package com.ntos.vm.debug;

import com.ntos.vm.bytecode.Opcode;
import com.ntos.vm.memory.VirtualMemory;

import java.util.ArrayList;
import java.util.List;

public final class Disassembler {
    public List<String> disassemble(VirtualMemory memory, int startAddress, int byteCount) {
        List<String> lines = new ArrayList<>();
        int pc = startAddress;
        int end = startAddress + byteCount;
        while (pc < end) {
            Opcode opcode = Opcode.fromByte(memory.readByte(pc));
            lines.add(formatInstruction(memory, pc, opcode));
            pc += opcode.encodedLength();
        }
        return lines;
    }

    private String formatInstruction(VirtualMemory memory, int pc, Opcode opcode) {
        return switch (opcode) {
            case NOP, RET, HALT -> "0x%04X: %s".formatted(pc, opcode.name());
            case PUSH, POP, INT -> "0x%04X: %s %d".formatted(pc, opcode.name(), memory.readByte(pc + 1));
            case MOV_REG, ADD, SUB, MUL, DIV, CMP -> "0x%04X: %s R%d, R%d"
                    .formatted(pc, opcode.name(), memory.readByte(pc + 1), memory.readByte(pc + 2));
            case MOV_IMM -> "0x%04X: %s R%d, %d"
                    .formatted(pc, opcode.name(), memory.readByte(pc + 1), readInt(memory, pc + 2));
            case LOAD, STORE -> "0x%04X: %s R%d, 0x%04X"
                    .formatted(pc, opcode.name(), memory.readByte(pc + 1), memory.readWord(pc + 2));
            case JMP, JZ, JNZ, CALL -> "0x%04X: %s 0x%04X"
                    .formatted(pc, opcode.name(), memory.readWord(pc + 1));
        };
    }

    private int readInt(VirtualMemory memory, int address) {
        return (memory.readByte(address) << 24)
                | (memory.readByte(address + 1) << 16)
                | (memory.readByte(address + 2) << 8)
                | memory.readByte(address + 3);
    }
}
