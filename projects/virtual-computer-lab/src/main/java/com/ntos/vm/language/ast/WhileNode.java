package com.ntos.vm.language.ast;

import java.util.List;

public record WhileNode(ExpressionNode condition, List<StatementNode> body) implements StatementNode {
}
