package com.ntos.vm.cpu;

public enum CpuFlag {
    ZERO(1),
    NEGATIVE(1 << 1),
    CARRY(1 << 2),
    OVERFLOW(1 << 3);

    private final int mask;

    CpuFlag(int mask) {
        this.mask = mask;
    }

    public int mask() {
        return mask;
    }
}
