package com.ntos.vm.language.ast;

import java.util.List;

public record CallNode(String callee, List<ExpressionNode> arguments) implements ExpressionNode {
}
