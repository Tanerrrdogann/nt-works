package com.ntos.vm.device;

public interface MmioDevice {
    boolean handles(int address);

    int read(int address);

    void write(int address, int value);

    String name();
}
