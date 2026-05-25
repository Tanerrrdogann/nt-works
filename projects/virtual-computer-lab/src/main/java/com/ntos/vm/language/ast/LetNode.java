package com.ntos.vm.language.ast;

public record LetNode(String name, ExpressionNode initializer) implements StatementNode {
}
