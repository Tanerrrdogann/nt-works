package com.ntos.vm.language.ast;

import java.util.List;

public record FunctionNode(String name, List<String> parameters, List<StatementNode> body) implements Node {
}
