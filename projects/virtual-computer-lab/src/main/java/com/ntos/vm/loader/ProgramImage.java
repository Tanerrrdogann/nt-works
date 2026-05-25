package com.ntos.vm.loader;

import java.util.Arrays;

public final class ProgramImage {
    private final NtbinHeader header;
    private final byte[] code;
    private final byte[] data;

    public ProgramImage(NtbinHeader header, byte[] code, byte[] data) {
        this.header = header;
        this.code = Arrays.copyOf(code, code.length);
        this.data = Arrays.copyOf(data, data.length);
    }

    public NtbinHeader header() {
        return header;
    }

    public byte[] code() {
        return Arrays.copyOf(code, code.length);
    }

    public byte[] data() {
        return Arrays.copyOf(data, data.length);
    }
}
