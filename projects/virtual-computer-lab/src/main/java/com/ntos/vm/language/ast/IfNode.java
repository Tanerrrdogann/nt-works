package com.ntos.vm.language.ast;

import java.util.List;

public record IfNode(ExpressionNode condition, List<StatementNode> thenBranch, List<StatementNode> elseBranch) implements StatementNode {
}
