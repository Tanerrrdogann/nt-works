package com.ntos.vm.os;

import java.util.Comparator;
import java.util.List;

public final class RoundRobinScheduler {
    private int cursor = -1;

    public ProcessControlBlock next(List<ProcessControlBlock> processes) {
        if (processes.isEmpty()) {
            return null;
        }

        int bestPriority = processes.stream()
                .filter(process -> process.state() == ProcessState.READY)
                .map(ProcessControlBlock::priority)
                .max(Comparator.naturalOrder())
                .orElse(Integer.MIN_VALUE);
        if (bestPriority == Integer.MIN_VALUE) {
            return null;
        }

        for (int i = 0; i < processes.size(); i++) {
            cursor = (cursor + 1) % processes.size();
            ProcessControlBlock process = processes.get(cursor);
            if (process.state() == ProcessState.READY && process.priority() == bestPriority) {
                return process;
            }
        }
        return null;
    }
}
