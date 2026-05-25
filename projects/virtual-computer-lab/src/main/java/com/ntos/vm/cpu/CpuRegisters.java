package com.ntos.vm.cpu;

import com.ntos.vm.memory.MemoryLayout;

import java.util.Arrays;

public final class CpuRegisters {
    private final int[] general = new int[8];
    private int pc;
    private int sp = MemoryLayout.STACK_END;
    private int instructionRegister;
    private int flags;

    public int read(int register) {
        requireRegister(register);
        return general[register];
    }

    public void write(int register, int value) {
        requireRegister(register);
        general[register] = value;
    }

    public int[] snapshotGeneral() {
        return Arrays.copyOf(general, general.length);
    }

    public void restoreGeneral(int[] snapshot) {
        if (snapshot.length != general.length) {
            throw new CpuExecutionException("Invalid register snapshot length: " + snapshot.length);
        }
        System.arraycopy(snapshot, 0, general, 0, general.length);
    }

    public int pc() {
        return pc;
    }

    public void pc(int pc) {
        requireUnsignedWord(pc, "PC");
        this.pc = pc;
    }

    public int sp() {
        return sp;
    }

    public void sp(int sp) {
        requireUnsignedWord(sp, "SP");
        this.sp = sp;
    }

    public int instructionRegister() {
        return instructionRegister;
    }

    public void instructionRegister(int instructionRegister) {
        this.instructionRegister = instructionRegister & 0xFF;
    }

    public int flags() {
        return flags;
    }

    public void flags(int flags) {
        this.flags = flags;
    }

    public boolean isSet(CpuFlag flag) {
        return (flags & flag.mask()) != 0;
    }

    public void set(CpuFlag flag, boolean value) {
        if (value) {
            flags |= flag.mask();
        } else {
            flags &= ~flag.mask();
        }
    }

    public void updateZeroAndNegative(int value) {
        set(CpuFlag.ZERO, value == 0);
        set(CpuFlag.NEGATIVE, value < 0);
    }

    private static void requireRegister(int register) {
        if (register < 0 || register > 7) {
            throw new CpuExecutionException("Invalid register index: " + register);
        }
    }

    private static void requireUnsignedWord(int value, String label) {
        if (value < 0 || value > 0xFFFF) {
            throw new CpuExecutionException(label + " out of 16-bit range: " + value);
        }
    }
}
