package com.ntos.vm.language;

public enum TokenType {
    LET,
    IF,
    ELSE,
    WHILE,
    FUNCTION,
    RETURN,
    PRINT,

    IDENTIFIER,
    NUMBER,
    STRING,

    PLUS,
    MINUS,
    STAR,
    SLASH,
    ASSIGN,
    EQUAL_EQUAL,
    BANG_EQUAL,
    LESS,
    LESS_EQUAL,
    GREATER,
    GREATER_EQUAL,

    LEFT_PAREN,
    RIGHT_PAREN,
    LEFT_BRACE,
    RIGHT_BRACE,
    LEFT_BRACKET,
    RIGHT_BRACKET,
    COMMA,
    SEMICOLON,
    EOF
}
