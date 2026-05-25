package com.ntos.vm.device;

import com.ntos.vm.memory.MemoryLayout;

public final class TimerDevice implements MmioDevice {
    public static final int CONTROL = MemoryLayout.MMIO_START + 0x10;
    public static final int STATUS = MemoryLayout.MMIO_START + 0x11;

    private boolean enabled = true;
    private int ticks;

    @Override
    public boolean handles(int address) {
        return address == CONTROL || address == STATUS;
    }

    @Override
    public int read(int address) {
        if (address == CONTROL) {
            return enabled ? 1 : 0;
        }
        return ticks & 0xFF;
    }

    @Override
    public void write(int address, int value) {
        if (address == CONTROL) {
            enabled = (value & 1) == 1;
        } else if (address == STATUS) {
            ticks = value & 0xFF;
        }
    }

    @Override
    public String name() {
        return "NT_TIMER";
    }

    public void tick() {
        if (enabled) {
            ticks = (ticks + 1) & 0xFF;
        }
    }

    public int ticks() {
        return ticks;
    }
}
