package com.ntos.vm.loader;

public record LoadedProgram(
        int entryPoint,
        int codeStart,
        int codeSize,
        int dataStart,
        int dataSize
) {
}
