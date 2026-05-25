package com.ntos.vm.device;

import com.ntos.vm.memory.MemoryLayout;

public final class TerminalDevice implements MmioDevice {
    public static final int STATUS = MemoryLayout.MMIO_START;
    public static final int OUTPUT = MemoryLayout.MMIO_START + 1;

    private final StringBuilder output = new StringBuilder();

    @Override
    public boolean handles(int address) {
        return address == STATUS || address == OUTPUT;
    }

    @Override
    public int read(int address) {
        return address == STATUS ? 1 : 0;
    }

    @Override
    public void write(int address, int value) {
        if (address == OUTPUT) {
            output.append((char) (value & 0xFF));
        }
    }

    @Override
    public String name() {
        return "NT_TTY";
    }

    public String output() {
        return output.toString();
    }
}
