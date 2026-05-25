package com.ntos.vm.loader;

import com.ntos.vm.memory.MemoryLayout;
import com.ntos.vm.memory.VirtualMemory;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;

public final class NtbinLoader {
    public ProgramImage read(Path path) throws IOException {
        return read(Files.readAllBytes(path));
    }

    public ProgramImage read(byte[] bytes) {
        if (bytes.length < NtbinFormat.HEADER_SIZE) {
            throw new NtbinLoadException("File is smaller than the NTBIN header");
        }

        ByteBuffer buffer = ByteBuffer.wrap(bytes).order(ByteOrder.BIG_ENDIAN);
        byte[] magic = new byte[NtbinFormat.MAGIC.length];
        buffer.get(magic);

        if (!Arrays.equals(magic, NtbinFormat.MAGIC)) {
            throw new NtbinLoadException("Invalid NTBIN magic number");
        }

        int version = Short.toUnsignedInt(buffer.getShort());
        buffer.getShort(); // reserved
        int entryPoint = buffer.getInt();
        int codeSize = buffer.getInt();
        int dataSize = buffer.getInt();

        if (version != NtbinFormat.VERSION) {
            throw new NtbinLoadException("Unsupported NTBIN version: " + version);
        }

        int expectedSize = NtbinFormat.HEADER_SIZE + codeSize + dataSize;
        if (codeSize < 0 || dataSize < 0 || expectedSize != bytes.length) {
            throw new NtbinLoadException("NTBIN section sizes do not match file length");
        }

        if (entryPoint < MemoryLayout.USER_START || entryPoint >= MemoryLayout.USER_END) {
            throw new NtbinLoadException("Entry point is outside user memory: 0x%04X".formatted(entryPoint));
        }

        byte[] code = Arrays.copyOfRange(bytes, NtbinFormat.HEADER_SIZE, NtbinFormat.HEADER_SIZE + codeSize);
        byte[] data = Arrays.copyOfRange(bytes, NtbinFormat.HEADER_SIZE + codeSize, expectedSize);
        return new ProgramImage(new NtbinHeader(version, entryPoint, codeSize, dataSize), code, data);
    }

    public LoadedProgram load(ProgramImage image, VirtualMemory memory) {
        int codeStart = MemoryLayout.USER_START;
        int dataStart = codeStart + image.header().codeSize();
        int dataEnd = dataStart + image.header().dataSize();

        if (dataEnd > MemoryLayout.USER_END) {
            throw new NtbinLoadException("Program does not fit in the user code/data region");
        }

        memory.loadBytes(codeStart, image.code());
        memory.loadBytes(dataStart, image.data());

        return new LoadedProgram(
                image.header().entryPoint(),
                codeStart,
                image.header().codeSize(),
                dataStart,
                image.header().dataSize()
        );
    }

    public LoadedProgram load(Path path, VirtualMemory memory) throws IOException {
        return load(read(path), memory);
    }
}
