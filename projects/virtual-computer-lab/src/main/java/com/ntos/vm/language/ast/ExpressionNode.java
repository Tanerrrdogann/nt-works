package com.ntos.vm.language.ast;

public sealed interface ExpressionNode extends Node permits ArrayLiteralNode, BinaryExpressionNode, CallNode, IdentifierNode, IndexNode, NumberNode, StringNode {
}
