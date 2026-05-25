package com.ntos.vm.compiler;

import com.ntos.vm.bytecode.Opcode;
import com.ntos.vm.device.KeyboardDevice;
import com.ntos.vm.device.TerminalDevice;
import com.ntos.vm.language.Lexer;
import com.ntos.vm.language.Parser;
import com.ntos.vm.language.TokenType;
import com.ntos.vm.language.ast.AssignmentNode;
import com.ntos.vm.language.ast.ArrayLiteralNode;
import com.ntos.vm.language.ast.BinaryExpressionNode;
import com.ntos.vm.language.ast.CallNode;
import com.ntos.vm.language.ast.ExpressionNode;
import com.ntos.vm.language.ast.FunctionNode;
import com.ntos.vm.language.ast.IdentifierNode;
import com.ntos.vm.language.ast.IfNode;
import com.ntos.vm.language.ast.IndexNode;
import com.ntos.vm.language.ast.LetNode;
import com.ntos.vm.language.ast.NumberNode;
import com.ntos.vm.language.ast.PrintNode;
import com.ntos.vm.language.ast.ProgramNode;
import com.ntos.vm.language.ast.ReturnNode;
import com.ntos.vm.language.ast.StatementNode;
import com.ntos.vm.language.ast.StringNode;
import com.ntos.vm.language.ast.WhileNode;
import com.ntos.vm.loader.NtbinWriter;
import com.ntos.vm.memory.MemoryLayout;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class NtCompiler {
    private static final int ENTRY_POINT = MemoryLayout.USER_START;
    private static final int VARIABLE_BASE = 0x7000;
    private static final int PRINT_INT = 1;

    private final BytecodeEmitter emitter = new BytecodeEmitter();
    private final Map<String, FunctionSymbol> functions = new HashMap<>();
    private final List<PendingCall> pendingCalls = new ArrayList<>();
    private int nextVariableAddress = VARIABLE_BASE;
    private FunctionSymbol currentFunction;
    private Scope globalScope;
    private Scope currentScope;

    public CompiledProgram compileSource(String source) {
        ProgramNode program = new Parser(new Lexer(source).scanTokens()).parse();
        return compile(program);
    }

    public CompiledProgram compile(ProgramNode program) {
        declareFunctions(program);

        globalScope = new Scope(null);
        currentScope = globalScope;
        for (StatementNode statement : program.statements()) {
            compileStatement(statement);
        }
        emitOpcode(Opcode.HALT);

        for (FunctionNode function : program.functions()) {
            compileFunction(function);
        }

        patchCalls();
        byte[] code = emitter.toByteArray();
        byte[] ntbin = new NtbinWriter().write(ENTRY_POINT, code, new byte[0]);
        return new CompiledProgram(ntbin, code);
    }

    private void declareFunctions(ProgramNode program) {
        for (FunctionNode function : program.functions()) {
            if (functions.put(function.name(), new FunctionSymbol(function.name(), function.parameters().size())) != null) {
                throw new CompileException("Duplicate function: " + function.name());
            }
        }
    }

    private void compileFunction(FunctionNode function) {
        FunctionSymbol symbol = functions.get(function.name());
        symbol.address = absolutePosition();

        FunctionSymbol previousFunction = currentFunction;
        Scope previousScope = currentScope;
        currentFunction = symbol;
        currentScope = new Scope(globalScope);

        for (int i = 0; i < function.parameters().size(); i++) {
            int address = declareVariable(function.parameters().get(i));
            emitStore(i, address);
        }

        for (StatementNode statement : function.body()) {
            compileStatement(statement);
        }

        emitMovImm(0, 0);
        emitOpcode(Opcode.RET);

        currentFunction = previousFunction;
        currentScope = previousScope;
    }

    private void compileStatement(StatementNode statement) {
        if (statement instanceof LetNode node) {
            int address = declareVariable(node.name());
            if (node.initializer() instanceof ArrayLiteralNode array) {
                int base = compileArrayLiteral(array);
                declareArray(node.name(), base, array.elements().size());
                emitMovImm(0, base);
            } else {
                compileExpression(node.initializer());
            }
            emitStore(0, address);
        } else if (statement instanceof AssignmentNode node) {
            int address = resolveVariable(node.name());
            compileExpression(node.value());
            emitStore(0, address);
        } else if (statement instanceof PrintNode node) {
            if (node.expression() instanceof StringNode string) {
                compileStringPrint(string.value());
            } else if (node.expression() instanceof CallNode call && call.callee().equals("input_string")) {
                compileInputStringPrint(call);
            } else {
                compileExpression(node.expression());
                emitOpcode(Opcode.INT);
                emitByte(PRINT_INT);
            }
        } else if (statement instanceof IfNode node) {
            compileIf(node);
        } else if (statement instanceof WhileNode node) {
            compileWhile(node);
        } else if (statement instanceof ReturnNode node) {
            if (currentFunction == null) {
                throw new CompileException("return can only be used inside a function");
            }
            compileExpression(node.value());
            emitOpcode(Opcode.RET);
        } else {
            throw new CompileException("Unsupported statement: " + statement.getClass().getSimpleName());
        }
    }

    private void compileIf(IfNode node) {
        compileConditionJumpToFalse(node.condition());
        int falsePatch = lastPatchPosition;
        for (StatementNode statement : node.thenBranch()) {
            compileStatement(statement);
        }
        int endPatch = emitter.emitJump(Opcode.JMP);
        emitter.patchWord(falsePatch, absolutePosition());
        for (StatementNode statement : node.elseBranch()) {
            compileStatement(statement);
        }
        emitter.patchWord(endPatch, absolutePosition());
    }

    private int lastPatchPosition;

    private void compileWhile(WhileNode node) {
        int loopStart = absolutePosition();
        compileConditionJumpToFalse(node.condition());
        int exitPatch = lastPatchPosition;
        for (StatementNode statement : node.body()) {
            compileStatement(statement);
        }
        emitJump(Opcode.JMP, loopStart);
        emitter.patchWord(exitPatch, absolutePosition());
    }

    private void compileConditionJumpToFalse(ExpressionNode condition) {
        compileExpression(condition);
        emitMovImm(1, 0);
        emitRegisterRegister(Opcode.CMP, 0, 1);
        lastPatchPosition = emitter.emitJump(Opcode.JZ);
    }

    private void compileExpression(ExpressionNode expression) {
        if (expression instanceof NumberNode node) {
            emitMovImm(0, node.value());
        } else if (expression instanceof IdentifierNode node) {
            emitLoad(0, resolveVariable(node.name()));
        } else if (expression instanceof StringNode node) {
            emitMovImm(0, node.value().length());
        } else if (expression instanceof ArrayLiteralNode node) {
            emitMovImm(0, compileArrayLiteral(node));
        } else if (expression instanceof IndexNode node) {
            compileIndex(node);
        } else if (expression instanceof CallNode node) {
            compileCall(node);
        } else if (expression instanceof BinaryExpressionNode node) {
            compileBinary(node);
        } else {
            throw new CompileException("Unsupported expression: " + expression.getClass().getSimpleName());
        }
    }

    private void compileStringPrint(String value) {
        for (int i = 0; i < value.length(); i++) {
            emitMovImm(0, value.charAt(i));
            emitStore(0, TerminalDevice.OUTPUT);
        }
        emitMovImm(0, '\n');
        emitStore(0, TerminalDevice.OUTPUT);
    }

    private void compileInputStringPrint(CallNode node) {
        if (!node.arguments().isEmpty()) {
            throw new CompileException("input_string expects no arguments");
        }
        int loopStart = absolutePosition();
        emitLoad(0, KeyboardDevice.INPUT);
        emitMovImm(1, 0);
        emitRegisterRegister(Opcode.CMP, 0, 1);
        int zeroPatch = emitter.emitJump(Opcode.JZ);
        emitMovImm(1, '\n');
        emitRegisterRegister(Opcode.CMP, 0, 1);
        int newlinePatch = emitter.emitJump(Opcode.JZ);
        emitStore(0, TerminalDevice.OUTPUT);
        emitJump(Opcode.JMP, loopStart);
        int end = absolutePosition();
        emitter.patchWord(zeroPatch, end);
        emitter.patchWord(newlinePatch, end);
        emitMovImm(0, '\n');
        emitStore(0, TerminalDevice.OUTPUT);
    }

    private int compileArrayLiteral(ArrayLiteralNode node) {
        int base = allocateArray(node.elements().size());
        for (int i = 0; i < node.elements().size(); i++) {
            compileExpression(node.elements().get(i));
            emitStore(0, base + i);
        }
        return base;
    }

    private void compileIndex(IndexNode node) {
        if (!(node.array() instanceof IdentifierNode arrayIdentifier)) {
            throw new CompileException("Only named arrays can be indexed in this compiler phase");
        }
        if (!(node.index() instanceof NumberNode indexNode)) {
            throw new CompileException("Array indexes must be numeric constants in this compiler phase");
        }
        ArraySymbol symbol = resolveArray(arrayIdentifier.name());
        int index = indexNode.value();
        if (index < 0 || index >= symbol.length) {
            throw new CompileException("Array index out of bounds: " + index);
        }
        emitLoad(0, symbol.base + index);
    }

    private void compileBinary(BinaryExpressionNode node) {
        compileExpression(node.left());
        emitOpcode(Opcode.PUSH);
        emitByte(0);
        compileExpression(node.right());
        emitOpcode(Opcode.POP);
        emitByte(1);

        switch (node.operator()) {
            case PLUS -> {
                emitRegisterRegister(Opcode.ADD, 1, 0);
                emitRegisterRegister(Opcode.MOV_REG, 0, 1);
            }
            case MINUS -> {
                emitRegisterRegister(Opcode.SUB, 1, 0);
                emitRegisterRegister(Opcode.MOV_REG, 0, 1);
            }
            case STAR -> {
                emitRegisterRegister(Opcode.MUL, 1, 0);
                emitRegisterRegister(Opcode.MOV_REG, 0, 1);
            }
            case SLASH -> {
                emitRegisterRegister(Opcode.DIV, 1, 0);
                emitRegisterRegister(Opcode.MOV_REG, 0, 1);
            }
            case EQUAL_EQUAL, BANG_EQUAL -> compileEqualityResult(node.operator());
            default -> throw new CompileException("Unsupported binary operator in bytecode compiler: " + node.operator());
        }
    }

    private void compileEqualityResult(TokenType operator) {
        emitRegisterRegister(Opcode.CMP, 1, 0);
        int truePatch = emitter.emitJump(operator == TokenType.EQUAL_EQUAL ? Opcode.JZ : Opcode.JNZ);
        emitMovImm(0, 0);
        int endPatch = emitter.emitJump(Opcode.JMP);
        emitter.patchWord(truePatch, absolutePosition());
        emitMovImm(0, 1);
        emitter.patchWord(endPatch, absolutePosition());
    }

    private void compileCall(CallNode node) {
        if (node.callee().equals("input_number")) {
            compileInputNumber(node);
            return;
        }
        if (node.callee().equals("input_string")) {
            emitMovImm(0, 0);
            return;
        }
        FunctionSymbol symbol = functions.get(node.callee());
        if (symbol == null) {
            throw new CompileException("Unknown function: " + node.callee());
        }
        if (node.arguments().size() != symbol.arity) {
            throw new CompileException("Function %s expects %d arguments but got %d"
                    .formatted(node.callee(), symbol.arity, node.arguments().size()));
        }
        if (node.arguments().size() > 4) {
            throw new CompileException("Functions support up to 4 arguments in this compiler phase");
        }

        for (ExpressionNode argument : node.arguments()) {
            compileExpression(argument);
            emitOpcode(Opcode.PUSH);
            emitByte(0);
        }
        for (int register = node.arguments().size() - 1; register >= 0; register--) {
            emitOpcode(Opcode.POP);
            emitByte(register);
        }

        int patchPosition = emitter.emitJump(Opcode.CALL);
        pendingCalls.add(new PendingCall(node.callee(), patchPosition));
    }

    private void compileInputNumber(CallNode node) {
        if (!node.arguments().isEmpty()) {
            throw new CompileException("input_number expects no arguments");
        }
        emitMovImm(2, 0);
        int loopStart = absolutePosition();
        emitLoad(0, KeyboardDevice.INPUT);
        emitMovImm(1, 0);
        emitRegisterRegister(Opcode.CMP, 0, 1);
        int zeroPatch = emitter.emitJump(Opcode.JZ);
        emitMovImm(1, '\n');
        emitRegisterRegister(Opcode.CMP, 0, 1);
        int newlinePatch = emitter.emitJump(Opcode.JZ);
        emitMovImm(1, '0');
        emitRegisterRegister(Opcode.SUB, 0, 1);
        emitOpcode(Opcode.PUSH);
        emitByte(0);
        emitRegisterRegister(Opcode.MOV_REG, 0, 2);
        emitMovImm(1, 10);
        emitRegisterRegister(Opcode.MUL, 0, 1);
        emitOpcode(Opcode.POP);
        emitByte(1);
        emitRegisterRegister(Opcode.ADD, 0, 1);
        emitRegisterRegister(Opcode.MOV_REG, 2, 0);
        emitJump(Opcode.JMP, loopStart);
        int end = absolutePosition();
        emitter.patchWord(zeroPatch, end);
        emitter.patchWord(newlinePatch, end);
        emitRegisterRegister(Opcode.MOV_REG, 0, 2);
    }

    private int declareVariable(String name) {
        if (currentScope.variables.containsKey(name)) {
            throw new CompileException("Duplicate variable in scope: " + name);
        }
        int address = nextVariableAddress++;
        currentScope.variables.put(name, address);
        return address;
    }

    private int allocateArray(int length) {
        int address = nextVariableAddress;
        nextVariableAddress += Math.max(1, length);
        return address;
    }

    private void declareArray(String name, int base, int length) {
        currentScope.arrays.put(name, new ArraySymbol(base, length));
    }

    private int resolveVariable(String name) {
        Scope scope = currentScope;
        while (scope != null) {
            Integer address = scope.variables.get(name);
            if (address != null) {
                return address;
            }
            scope = scope.parent;
        }
        throw new CompileException("Undefined variable: " + name);
    }

    private ArraySymbol resolveArray(String name) {
        Scope scope = currentScope;
        while (scope != null) {
            ArraySymbol symbol = scope.arrays.get(name);
            if (symbol != null) {
                return symbol;
            }
            scope = scope.parent;
        }
        throw new CompileException("Undefined array: " + name);
    }

    private void patchCalls() {
        for (PendingCall pendingCall : pendingCalls) {
            FunctionSymbol symbol = functions.get(pendingCall.functionName);
            if (symbol.address < 0) {
                throw new CompileException("Function was declared but not compiled: " + pendingCall.functionName);
            }
            emitter.patchWord(pendingCall.patchPosition, symbol.address);
        }
    }

    private int absolutePosition() {
        return ENTRY_POINT + emitter.position();
    }

    private void emitOpcode(Opcode opcode) {
        emitter.opcode(opcode);
    }

    private void emitByte(int value) {
        emitter.byteValue(value);
    }

    private void emitMovImm(int register, int value) {
        emitOpcode(Opcode.MOV_IMM);
        emitByte(register);
        emitter.int32(value);
    }

    private void emitLoad(int register, int address) {
        emitOpcode(Opcode.LOAD);
        emitByte(register);
        emitter.word(address);
    }

    private void emitStore(int register, int address) {
        emitOpcode(Opcode.STORE);
        emitByte(register);
        emitter.word(address);
    }

    private void emitRegisterRegister(Opcode opcode, int destination, int source) {
        emitOpcode(opcode);
        emitByte(destination);
        emitByte(source);
    }

    private void emitJump(Opcode opcode, int address) {
        emitOpcode(opcode);
        emitter.word(address);
    }

    private static final class Scope {
        private final Scope parent;
        private final Map<String, Integer> variables = new HashMap<>();
        private final Map<String, ArraySymbol> arrays = new HashMap<>();

        private Scope(Scope parent) {
            this.parent = parent;
        }
    }

    private record ArraySymbol(int base, int length) {
    }

    private static final class FunctionSymbol {
        private final String name;
        private final int arity;
        private int address = -1;

        private FunctionSymbol(String name, int arity) {
            this.name = name;
            this.arity = arity;
        }
    }

    private record PendingCall(String functionName, int patchPosition) {
    }
}
