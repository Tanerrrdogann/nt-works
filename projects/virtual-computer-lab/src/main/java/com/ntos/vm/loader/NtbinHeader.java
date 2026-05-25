package com.ntos.vm.loader;

public record NtbinHeader(
        int version,
        int entryPoint,
        int codeSize,
        int dataSize
) {
}
