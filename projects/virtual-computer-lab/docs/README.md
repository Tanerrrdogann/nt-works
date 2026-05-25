# Docs

Architecture notes, project plan, screenshots, and demo walkthroughs will live here.

## Phase 1 Done

- Custom `.ntbin` format
- `NT_os` project identity
- Opcode table
- `byte[]` virtual memory
- Protected OS memory writes
- Bounds-checked byte/word memory access
- Loader that validates and loads code/data into user memory

## Phase 2 Done

- Fetch-decode-execute CPU loop
- R0-R7 general registers
- PC, SP, IR, FLAGS
- ZERO, NEGATIVE, CARRY, OVERFLOW flags
- Arithmetic, memory, branch, stack, call/return, interrupt, and halt instructions
- Real stack operations through virtual memory

## Phase 3 Done

- Lexer with line/column tokens
- Recursive descent parser
- AST nodes for program, let, assignment, binary expressions, if, while, function, return, call, and print
- Semantic checks for undefined variables, duplicate variables, unknown functions, wrong function arity, and invalid returns
- AST-to-bytecode compiler
- Source `.nt` to binary `.ntbin` pipeline
- End-to-end execution through loader, memory, and CPU

## Phase 4 Done

- PCB with pid, state, PC, SP, register snapshot, code/data segments, heap range, stack range, priority, and time slice
- Process states: NEW, READY, RUNNING, WAITING, TERMINATED
- Round Robin scheduler with priority selection
- Context switching through CPU register snapshots
- Syscalls: print, exit, sleep, alloc, getpid, yield
- Per-process heap pointer using real virtual addresses

## Phase 5 Done

- Timer ticks connected to scheduled execution
- MMIO device region at `0xFF00 - 0xFFFF`
- Terminal, keyboard, timer, and LED/status devices
- Disassembler for bytecode inspection
- Debug shell commands for registers, memory, stack, process table, devices, trace state, and disassembly
- Demo path from `.nt` source to `.ntbin` execution through NT_os

## Desktop UI Done

- Swing desktop app with a black VM-style workspace
- Terminal, file manager, source editor, system monitor, and disassembler windows
- Compile + Run flow from source text to `.ntbin` to scheduled process execution
- File manager can open `.nt` source files or run `.ntbin` binaries
- Headless environments fall back to CLI mode
