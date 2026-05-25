package com.ntos.vm.language;

import com.ntos.vm.language.ast.FunctionNode;
import com.ntos.vm.language.ast.LetNode;
import com.ntos.vm.language.ast.PrintNode;
import com.ntos.vm.language.ast.ProgramNode;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertInstanceOf;

class LexerParserTest {
    @Test
    void tokenizesKeywordsIdentifiersAndNumbers() {
        List<Token> tokens = new Lexer("let x = 42; print x;").scanTokens();

        assertEquals(TokenType.LET, tokens.get(0).type());
        assertEquals(TokenType.IDENTIFIER, tokens.get(1).type());
        assertEquals(TokenType.NUMBER, tokens.get(3).type());
        assertEquals(TokenType.PRINT, tokens.get(5).type());
        assertEquals(TokenType.EOF, tokens.get(tokens.size() - 1).type());
    }

    @Test
    void parsesFunctionsAndTopLevelStatements() {
        String source = """
                function add(a, b) {
                  return a + b;
                }
                let x = 5;
                print add(x, 4);
                """;

        ProgramNode program = new Parser(new Lexer(source).scanTokens()).parse();

        assertEquals(1, program.functions().size());
        FunctionNode function = program.functions().get(0);
        assertEquals("add", function.name());
        assertEquals(List.of("a", "b"), function.parameters());
        assertEquals(2, program.statements().size());
        assertInstanceOf(LetNode.class, program.statements().get(0));
        assertInstanceOf(PrintNode.class, program.statements().get(1));
    }
}
