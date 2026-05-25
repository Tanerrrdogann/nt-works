package com.ntos.vm.language;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Lexer {
    private static final Map<String, TokenType> KEYWORDS = Map.of(
            "let", TokenType.LET,
            "if", TokenType.IF,
            "else", TokenType.ELSE,
            "while", TokenType.WHILE,
            "function", TokenType.FUNCTION,
            "return", TokenType.RETURN,
            "print", TokenType.PRINT
    );

    private final String source;
    private final List<Token> tokens = new ArrayList<>();
    private int start;
    private int current;
    private int line = 1;
    private int column = 1;
    private int tokenColumn = 1;

    public Lexer(String source) {
        this.source = source;
    }

    public List<Token> scanTokens() {
        while (!isAtEnd()) {
            start = current;
            tokenColumn = column;
            scanToken();
        }
        tokens.add(new Token(TokenType.EOF, "", line, column));
        return List.copyOf(tokens);
    }

    private void scanToken() {
        char c = advance();
        switch (c) {
            case '(' -> add(TokenType.LEFT_PAREN);
            case ')' -> add(TokenType.RIGHT_PAREN);
            case '{' -> add(TokenType.LEFT_BRACE);
            case '}' -> add(TokenType.RIGHT_BRACE);
            case '[' -> add(TokenType.LEFT_BRACKET);
            case ']' -> add(TokenType.RIGHT_BRACKET);
            case ',' -> add(TokenType.COMMA);
            case ';' -> add(TokenType.SEMICOLON);
            case '"' -> string();
            case '+' -> add(TokenType.PLUS);
            case '-' -> add(TokenType.MINUS);
            case '*' -> add(TokenType.STAR);
            case '/' -> add(TokenType.SLASH);
            case '=' -> add(match('=') ? TokenType.EQUAL_EQUAL : TokenType.ASSIGN);
            case '!' -> {
                if (match('=')) {
                    add(TokenType.BANG_EQUAL);
                } else {
                    throw error("Unexpected character '!'");
                }
            }
            case '<' -> add(match('=') ? TokenType.LESS_EQUAL : TokenType.LESS);
            case '>' -> add(match('=') ? TokenType.GREATER_EQUAL : TokenType.GREATER);
            case ' ', '\r', '\t' -> {
            }
            case '\n' -> {
                line++;
                column = 1;
            }
            default -> {
                if (isDigit(c)) {
                    number();
                } else if (isAlpha(c)) {
                    identifier();
                } else {
                    throw error("Unexpected character '%s'".formatted(c));
                }
            }
        }
    }

    private void number() {
        while (isDigit(peek())) {
            advance();
        }
        add(TokenType.NUMBER);
    }

    private void string() {
        while (!isAtEnd() && peek() != '"') {
            if (peek() == '\n') {
                line++;
                column = 1;
            }
            advance();
        }
        if (isAtEnd()) {
            throw error("Unterminated string");
        }
        advance();
        add(TokenType.STRING);
    }

    private void identifier() {
        while (isAlphaNumeric(peek())) {
            advance();
        }
        String text = source.substring(start, current);
        add(KEYWORDS.getOrDefault(text, TokenType.IDENTIFIER));
    }

    private boolean match(char expected) {
        if (isAtEnd() || source.charAt(current) != expected) {
            return false;
        }
        current++;
        column++;
        return true;
    }

    private char peek() {
        return isAtEnd() ? '\0' : source.charAt(current);
    }

    private char advance() {
        column++;
        return source.charAt(current++);
    }

    private void add(TokenType type) {
        tokens.add(new Token(type, source.substring(start, current), line, tokenColumn));
    }

    private boolean isAtEnd() {
        return current >= source.length();
    }

    private static boolean isDigit(char c) {
        return c >= '0' && c <= '9';
    }

    private static boolean isAlpha(char c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_';
    }

    private static boolean isAlphaNumeric(char c) {
        return isAlpha(c) || isDigit(c);
    }

    private LanguageException error(String message) {
        return new LanguageException("Lex error at %d:%d: %s".formatted(line, tokenColumn, message));
    }
}
