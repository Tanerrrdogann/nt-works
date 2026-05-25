package com.ntos.vm.cpu;

public interface InterruptHandler {
    InterruptHandler NO_OP = (number, cpu) -> {
    };

    void handleSoftwareInterrupt(int number, VirtualCpu cpu);
}
