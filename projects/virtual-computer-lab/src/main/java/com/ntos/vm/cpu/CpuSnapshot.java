package com.ntos.vm.cpu;

public record CpuSnapshot(
        int[] generalRegisters,
        int pc,
        int sp,
        int instructionRegister,
        int flags,
        boolean halted
) {
}
