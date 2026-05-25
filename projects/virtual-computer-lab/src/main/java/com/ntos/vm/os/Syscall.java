package com.ntos.vm.os;

import java.util.Arrays;

public enum Syscall {
    PRINT(1),
    EXIT(2),
    SLEEP(3),
    ALLOC(4),
    GETPID(5),
    YIELD(6);

    private final int number;

    Syscall(int number) {
        this.number = number;
    }

    public int number() {
        return number;
    }

    public static Syscall fromNumber(int number) {
        return Arrays.stream(values())
                .filter(syscall -> syscall.number == number)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown syscall: " + number));
    }
}
