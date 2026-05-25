package com.ntos.vm.debug;

import com.ntos.vm.cpu.VirtualCpu;
import com.ntos.vm.memory.VirtualMemory;
import com.ntos.vm.os.NTOperatingSystem;
import com.ntos.vm.os.ProcessControlBlock;

import java.util.Locale;
import java.util.stream.Collectors;

public final class DebugShell {
    private final NTOperatingSystem os;
    private boolean trace;

    public DebugShell(NTOperatingSystem os) {
        this.os = os;
    }

    public String execute(String command) {
        String[] parts = command.trim().split("\\s+");
        if (parts.length == 0 || parts[0].isBlank()) {
            return "";
        }

        return switch (parts[0].toLowerCase(Locale.ROOT)) {
            case "help" -> help();
            case "regs" -> registers();
            case "ps" -> processTable();
            case "mem" -> memory(parts);
            case "stack" -> stack();
            case "devices" -> devices();
            case "disasm" -> disasm(parts);
            case "trace" -> trace(parts);
            case "interrupt" -> "software interrupt injection is reserved for the interactive shell phase";
            default -> "unknown command: " + parts[0];
        };
    }

    private String help() {
        return """
                Debug commands:
                  help                 show this command list
                  regs                 show CPU registers, PC, SP and FLAGS
                  ps                   show process table
                  mem [addr] [len]     dump memory, decimal or 0x hex address
                  stack                show stack pointer
                  devices              list MMIO devices
                  disasm [addr] [len]  disassemble memory
                  trace [on|off]       toggle trace flag placeholder
                  interrupt            reserved for interactive shell phase
                """;
    }

    private String registers() {
        VirtualCpu cpu = os.cpu();
        int[] registers = cpu.registers().snapshotGeneral();
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < registers.length; i++) {
            builder.append("R").append(i).append("=").append(registers[i]).append(' ');
        }
        builder.append("PC=0x%04X SP=0x%04X FLAGS=0x%02X".formatted(
                cpu.registers().pc(),
                cpu.registers().sp(),
                cpu.registers().flags()));
        return builder.toString();
    }

    private String processTable() {
        return os.processTable().stream()
                .map(process -> "pid=%d state=%s pc=0x%04X sp=0x%04X priority=%d slice=%d"
                        .formatted(
                                process.pid(),
                                process.state(),
                                process.pc(),
                                process.sp(),
                                process.priority(),
                                process.timeSlice()))
                .collect(Collectors.joining(System.lineSeparator()));
    }

    private String memory(String[] parts) {
        int start = parts.length > 1 ? parseNumber(parts[1]) : 0x2000;
        int length = parts.length > 2 ? parseNumber(parts[2]) : 16;
        byte[] bytes = os.memory().dump(start, length);
        StringBuilder builder = new StringBuilder("0x%04X:".formatted(start));
        for (byte b : bytes) {
            builder.append(" %02X".formatted(b & 0xFF));
        }
        return builder.toString();
    }

    private String stack() {
        return "SP=0x%04X".formatted(os.cpu().registers().sp());
    }

    private String devices() {
        return String.join(", ", os.memory().deviceNames());
    }

    private String disasm(String[] parts) {
        VirtualMemory memory = os.memory();
        int start = parts.length > 1 ? parseNumber(parts[1]) : 0x2000;
        int length = parts.length > 2 ? parseNumber(parts[2]) : 32;
        return String.join(System.lineSeparator(), new Disassembler().disassemble(memory, start, length));
    }

    private String trace(String[] parts) {
        if (parts.length > 1) {
            trace = parts[1].equalsIgnoreCase("on");
        }
        return "trace " + (trace ? "on" : "off");
    }

    private int parseNumber(String text) {
        if (text.startsWith("0x") || text.startsWith("0X")) {
            return Integer.parseInt(text.substring(2), 16);
        }
        return Integer.parseInt(text);
    }
}
