package com.ntos.vm.language;

public record Token(TokenType type, String lexeme, int line, int column) {
}
