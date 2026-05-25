package com.ntos.vm.language.ast;

public record IndexNode(ExpressionNode array, ExpressionNode index) implements ExpressionNode {
}
