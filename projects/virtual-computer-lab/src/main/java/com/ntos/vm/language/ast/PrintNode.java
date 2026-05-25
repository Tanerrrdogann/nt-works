package com.ntos.vm.language.ast;

public record PrintNode(ExpressionNode expression) implements StatementNode {
}
