package com.ntos.vm.memory;

public final class MemoryLayout {
    public static final int SIZE = 65_536;

    public static final int OS_START = 0x0000;
    public static final int OS_END = 0x2000;

    public static final int USER_START = 0x2000;
    public static final int USER_END = 0x8000;

    public static final int HEAP_START = 0x8000;
    public static final int HEAP_END = 0xC000;

    public static final int STACK_START = 0xC000;
    public static final int STACK_END = 0xFF00;

    public static final int MMIO_START = 0xFF00;
    public static final int MMIO_END = 0x1_0000;

    private MemoryLayout() {
    }

    public static boolean isOsReserved(int address) {
        return address >= OS_START && address < OS_END;
    }

    public static boolean isMmio(int address) {
        return address >= MMIO_START && address < MMIO_END;
    }
}
