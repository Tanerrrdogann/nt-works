package com.ntos.vm.loader;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public final class NtbinWriter {
    public byte[] write(int entryPoint, byte[] code, byte[] data) {
        ByteBuffer buffer = ByteBuffer
                .allocate(NtbinFormat.HEADER_SIZE + code.length + data.length)
                .order(ByteOrder.BIG_ENDIAN);

        buffer.put(NtbinFormat.MAGIC);
        buffer.putShort((short) NtbinFormat.VERSION);
        buffer.putShort((short) 0);
        buffer.putInt(entryPoint);
        buffer.putInt(code.length);
        buffer.putInt(data.length);
        buffer.put(code);
        buffer.put(data);
        return buffer.array();
    }
}
