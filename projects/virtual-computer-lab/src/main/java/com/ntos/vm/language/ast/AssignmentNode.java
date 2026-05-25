package com.ntos.vm.language.ast;

public record AssignmentNode(String name, ExpressionNode value) implements StatementNode {
}
