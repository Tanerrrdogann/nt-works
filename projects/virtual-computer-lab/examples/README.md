# Examples

Sample assembly-like programs and simulator scenarios live here.

Run:

```bash
mvn exec:java
```

The demo command creates `examples/hello.nt`, compiles it to `examples/hello.ntbin`, loads it into virtual memory, and executes it on the CPU:

```text
function add(a, b) {
  return a + b;
}

let x = 20;
let y = 22;
print add(x, y);
```

The program should print `42`; the final `R0` value should also be `42`.

The default demo runs through `NT_os` process creation, scheduling, loading, and CPU execution.

On a desktop machine, `mvn exec:java` opens the UI. Use `mvn exec:java -Dexec.args=--cli` for the terminal-only demo.
