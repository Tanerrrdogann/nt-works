package com.ntos.vm.memory;

import com.ntos.vm.device.MmioDevice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public final class VirtualMemory {
    private final byte[] memory = new byte[MemoryLayout.SIZE];
    private final List<MmioDevice> mmioDevices = new ArrayList<>();

    public int size() {
        return memory.length;
    }

    public int readByte(int address) {
        checkAddress(address);
        if (MemoryLayout.isMmio(address)) {
            MmioDevice device = findDevice(address);
            return device == null ? Byte.toUnsignedInt(memory[address]) : device.read(address) & 0xFF;
        }
        return Byte.toUnsignedInt(memory[address]);
    }

    public void writeByte(int address, int value) {
        checkWritable(address);
        memory[address] = (byte) value;
        if (MemoryLayout.isMmio(address)) {
            MmioDevice device = findDevice(address);
            if (device != null) {
                device.write(address, value);
            }
        }
    }

    public int readWord(int address) {
        checkAddress(address);
        checkAddress(address + 1);
        return (readByte(address) << 8) | readByte(address + 1);
    }

    public void writeWord(int address, int value) {
        checkWritable(address);
        checkWritable(address + 1);
        memory[address] = (byte) ((value >>> 8) & 0xFF);
        memory[address + 1] = (byte) (value & 0xFF);
    }

    public void loadBytes(int startAddress, byte[] bytes) {
        checkAddress(startAddress);
        checkAddress(startAddress + bytes.length - 1);
        for (int i = 0; i < bytes.length; i++) {
            checkWritable(startAddress + i);
        }
        System.arraycopy(bytes, 0, memory, startAddress, bytes.length);
    }

    public byte[] dump(int startAddress, int length) {
        if (length < 0) {
            throw new MemoryAccessException("Dump length cannot be negative");
        }
        checkAddress(startAddress);
        if (length == 0) {
            return new byte[0];
        }
        checkAddress(startAddress + length - 1);
        return Arrays.copyOfRange(memory, startAddress, startAddress + length);
    }

    public void attachDevice(MmioDevice device) {
        mmioDevices.add(device);
    }

    public List<String> deviceNames() {
        return mmioDevices.stream().map(MmioDevice::name).toList();
    }

    private MmioDevice findDevice(int address) {
        return mmioDevices.stream()
                .filter(device -> device.handles(address))
                .findFirst()
                .orElse(null);
    }

    private void checkWritable(int address) {
        checkAddress(address);
        if (MemoryLayout.isOsReserved(address)) {
            throw new MemoryAccessException("Write denied to OS reserved memory: 0x%04X".formatted(address));
        }
    }

    private void checkAddress(int address) {
        if (address < 0 || address >= memory.length) {
            throw new MemoryAccessException("Memory address out of bounds: 0x%04X".formatted(address));
        }
    }
}
