package com.tanerworks.ecommerce.auth;

public record LoginResponse(
        String token,
        String email,
        String role
) {
}
