package com.ntos.vm.device;

import com.ntos.vm.memory.MemoryLayout;

public final class LedDevice implements MmioDevice {
    public static final int STATUS = MemoryLayout.MMIO_START + 0x20;

    private int value;

    @Override
    public boolean handles(int address) {
        return address == STATUS;
    }

    @Override
    public int read(int address) {
        return value;
    }

    @Override
    public void write(int address, int value) {
        this.value = value & 0xFF;
    }

    @Override
    public String name() {
        return "NT_LED";
    }

    public int value() {
        return value;
    }
}
