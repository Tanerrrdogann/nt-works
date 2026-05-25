package com.ntos.vm.language.ast;

public sealed interface StatementNode extends Node permits AssignmentNode, IfNode, LetNode, PrintNode, ReturnNode, WhileNode {
}
