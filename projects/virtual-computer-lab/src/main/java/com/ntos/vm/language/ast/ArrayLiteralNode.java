package com.ntos.vm.language.ast;

import java.util.List;

public record ArrayLiteralNode(List<ExpressionNode> elements) implements ExpressionNode {
}
