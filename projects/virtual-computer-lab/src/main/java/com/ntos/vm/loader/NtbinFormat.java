package com.ntos.vm.loader;

import java.nio.charset.StandardCharsets;

public final class NtbinFormat {
    public static final byte[] MAGIC = "NTBN".getBytes(StandardCharsets.US_ASCII);
    public static final int VERSION = 1;
    public static final int HEADER_SIZE = 20;

    private NtbinFormat() {
    }
}
