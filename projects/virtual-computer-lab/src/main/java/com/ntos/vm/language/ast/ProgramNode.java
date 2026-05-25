package com.ntos.vm.language.ast;

import java.util.List;

public record ProgramNode(List<FunctionNode> functions, List<StatementNode> statements) implements Node {
}
