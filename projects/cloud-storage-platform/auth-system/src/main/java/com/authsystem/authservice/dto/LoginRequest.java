package com.authsystem.authservice.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

@Data
public class LoginRequest {
    @JsonAlias({"username", "email"})
    private String usernameOrEmail;
    private String password;
}
