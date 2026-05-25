package com.ntos.vm.language;

import com.ntos.vm.language.ast.AssignmentNode;
import com.ntos.vm.language.ast.ArrayLiteralNode;
import com.ntos.vm.language.ast.BinaryExpressionNode;
import com.ntos.vm.language.ast.CallNode;
import com.ntos.vm.language.ast.ExpressionNode;
import com.ntos.vm.language.ast.FunctionNode;
import com.ntos.vm.language.ast.IdentifierNode;
import com.ntos.vm.language.ast.IfNode;
import com.ntos.vm.language.ast.IndexNode;
import com.ntos.vm.language.ast.LetNode;
import com.ntos.vm.language.ast.NumberNode;
import com.ntos.vm.language.ast.PrintNode;
import com.ntos.vm.language.ast.ProgramNode;
import com.ntos.vm.language.ast.ReturnNode;
import com.ntos.vm.language.ast.StatementNode;
import com.ntos.vm.language.ast.StringNode;
import com.ntos.vm.language.ast.WhileNode;

import java.util.ArrayList;
import java.util.List;

public final class Parser {
    private final List<Token> tokens;
    private int current;

    public Parser(List<Token> tokens) {
        this.tokens = tokens;
    }

    public ProgramNode parse() {
        List<FunctionNode> functions = new ArrayList<>();
        List<StatementNode> statements = new ArrayList<>();

        while (!isAtEnd()) {
            if (match(TokenType.FUNCTION)) {
                functions.add(functionDeclaration());
            } else {
                statements.add(statement());
            }
        }

        return new ProgramNode(List.copyOf(functions), List.copyOf(statements));
    }

    private FunctionNode functionDeclaration() {
        Token name = consume(TokenType.IDENTIFIER, "Expected function name");
        consume(TokenType.LEFT_PAREN, "Expected '(' after function name");

        List<String> parameters = new ArrayList<>();
        if (!check(TokenType.RIGHT_PAREN)) {
            do {
                parameters.add(consume(TokenType.IDENTIFIER, "Expected parameter name").lexeme());
            } while (match(TokenType.COMMA));
        }

        consume(TokenType.RIGHT_PAREN, "Expected ')' after parameters");
        List<StatementNode> body = block();
        return new FunctionNode(name.lexeme(), List.copyOf(parameters), body);
    }

    private StatementNode statement() {
        if (match(TokenType.LET)) {
            return letStatement();
        }
        if (match(TokenType.IF)) {
            return ifStatement();
        }
        if (match(TokenType.WHILE)) {
            return whileStatement();
        }
        if (match(TokenType.RETURN)) {
            return returnStatement();
        }
        if (match(TokenType.PRINT)) {
            return printStatement();
        }
        return assignmentStatement();
    }

    private LetNode letStatement() {
        String name = consume(TokenType.IDENTIFIER, "Expected variable name").lexeme();
        consume(TokenType.ASSIGN, "Expected '=' after variable name");
        ExpressionNode initializer = expression();
        consume(TokenType.SEMICOLON, "Expected ';' after let statement");
        return new LetNode(name, initializer);
    }

    private AssignmentNode assignmentStatement() {
        String name = consume(TokenType.IDENTIFIER, "Expected assignment target").lexeme();
        consume(TokenType.ASSIGN, "Expected '=' after assignment target");
        ExpressionNode value = expression();
        consume(TokenType.SEMICOLON, "Expected ';' after assignment");
        return new AssignmentNode(name, value);
    }

    private IfNode ifStatement() {
        consume(TokenType.LEFT_PAREN, "Expected '(' after if");
        ExpressionNode condition = expression();
        consume(TokenType.RIGHT_PAREN, "Expected ')' after if condition");
        List<StatementNode> thenBranch = block();
        List<StatementNode> elseBranch = match(TokenType.ELSE) ? block() : List.of();
        return new IfNode(condition, thenBranch, elseBranch);
    }

    private WhileNode whileStatement() {
        consume(TokenType.LEFT_PAREN, "Expected '(' after while");
        ExpressionNode condition = expression();
        consume(TokenType.RIGHT_PAREN, "Expected ')' after while condition");
        return new WhileNode(condition, block());
    }

    private ReturnNode returnStatement() {
        ExpressionNode value = expression();
        consume(TokenType.SEMICOLON, "Expected ';' after return value");
        return new ReturnNode(value);
    }

    private PrintNode printStatement() {
        ExpressionNode value = expression();
        consume(TokenType.SEMICOLON, "Expected ';' after print value");
        return new PrintNode(value);
    }

    private List<StatementNode> block() {
        consume(TokenType.LEFT_BRACE, "Expected '{'");
        List<StatementNode> statements = new ArrayList<>();
        while (!check(TokenType.RIGHT_BRACE) && !isAtEnd()) {
            statements.add(statement());
        }
        consume(TokenType.RIGHT_BRACE, "Expected '}' after block");
        return List.copyOf(statements);
    }

    private ExpressionNode expression() {
        return equality();
    }

    private ExpressionNode equality() {
        ExpressionNode expression = comparison();
        while (match(TokenType.EQUAL_EQUAL, TokenType.BANG_EQUAL)) {
            Token operator = previous();
            ExpressionNode right = comparison();
            expression = new BinaryExpressionNode(expression, operator.type(), right);
        }
        return expression;
    }

    private ExpressionNode comparison() {
        ExpressionNode expression = term();
        while (match(TokenType.LESS, TokenType.LESS_EQUAL, TokenType.GREATER, TokenType.GREATER_EQUAL)) {
            Token operator = previous();
            ExpressionNode right = term();
            expression = new BinaryExpressionNode(expression, operator.type(), right);
        }
        return expression;
    }

    private ExpressionNode term() {
        ExpressionNode expression = factor();
        while (match(TokenType.PLUS, TokenType.MINUS)) {
            Token operator = previous();
            ExpressionNode right = factor();
            expression = new BinaryExpressionNode(expression, operator.type(), right);
        }
        return expression;
    }

    private ExpressionNode factor() {
        ExpressionNode expression = primary();
        while (match(TokenType.STAR, TokenType.SLASH)) {
            Token operator = previous();
            ExpressionNode right = primary();
            expression = new BinaryExpressionNode(expression, operator.type(), right);
        }
        return expression;
    }

    private ExpressionNode primary() {
        if (match(TokenType.NUMBER)) {
            return new NumberNode(Integer.parseInt(previous().lexeme()));
        }
        if (match(TokenType.STRING)) {
            String lexeme = previous().lexeme();
            return new StringNode(lexeme.substring(1, lexeme.length() - 1));
        }
        if (match(TokenType.LEFT_BRACKET)) {
            List<ExpressionNode> elements = new ArrayList<>();
            if (!check(TokenType.RIGHT_BRACKET)) {
                do {
                    elements.add(expression());
                } while (match(TokenType.COMMA));
            }
            consume(TokenType.RIGHT_BRACKET, "Expected ']' after array literal");
            return new ArrayLiteralNode(List.copyOf(elements));
        }

        if (match(TokenType.IDENTIFIER)) {
            String name = previous().lexeme();
            ExpressionNode expression;
            if (match(TokenType.LEFT_PAREN)) {
                List<ExpressionNode> arguments = new ArrayList<>();
                if (!check(TokenType.RIGHT_PAREN)) {
                    do {
                        arguments.add(expression());
                    } while (match(TokenType.COMMA));
                }
                consume(TokenType.RIGHT_PAREN, "Expected ')' after call arguments");
                expression = new CallNode(name, List.copyOf(arguments));
            } else {
                expression = new IdentifierNode(name);
            }
            while (match(TokenType.LEFT_BRACKET)) {
                ExpressionNode index = expression();
                consume(TokenType.RIGHT_BRACKET, "Expected ']' after index");
                expression = new IndexNode(expression, index);
            }
            return expression;
        }

        if (match(TokenType.LEFT_PAREN)) {
            ExpressionNode expression = expression();
            consume(TokenType.RIGHT_PAREN, "Expected ')' after expression");
            return expression;
        }

        throw error(peek(), "Expected expression");
    }

    private boolean match(TokenType... types) {
        for (TokenType type : types) {
            if (check(type)) {
                advance();
                return true;
            }
        }
        return false;
    }

    private Token consume(TokenType type, String message) {
        if (check(type)) {
            return advance();
        }
        throw error(peek(), message);
    }

    private boolean check(TokenType type) {
        return !isAtEnd() && peek().type() == type;
    }

    private Token advance() {
        if (!isAtEnd()) {
            current++;
        }
        return previous();
    }

    private boolean isAtEnd() {
        return peek().type() == TokenType.EOF;
    }

    private Token peek() {
        return tokens.get(current);
    }

    private Token previous() {
        return tokens.get(current - 1);
    }

    private LanguageException error(Token token, String message) {
        return new LanguageException("Parse error at %d:%d near '%s': %s"
                .formatted(token.line(), token.column(), token.lexeme(), message));
    }
}
