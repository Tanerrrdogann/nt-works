package com.ntos.vm.device;

import com.ntos.vm.memory.MemoryLayout;

import java.util.ArrayDeque;
import java.util.Queue;

public final class KeyboardDevice implements MmioDevice {
    public static final int INPUT = MemoryLayout.MMIO_START + 2;

    private final Queue<Integer> input = new ArrayDeque<>();

    @Override
    public boolean handles(int address) {
        return address == INPUT;
    }

    @Override
    public int read(int address) {
        Integer value = input.poll();
        return value == null ? 0 : value;
    }

    @Override
    public void write(int address, int value) {
        input.add(value & 0xFF);
    }

    @Override
    public String name() {
        return "NT_KEYBOARD";
    }
}
