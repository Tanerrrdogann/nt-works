package com.ntos.vm.language.ast;

import com.ntos.vm.language.TokenType;

public record BinaryExpressionNode(ExpressionNode left, TokenType operator, ExpressionNode right) implements ExpressionNode {
}
