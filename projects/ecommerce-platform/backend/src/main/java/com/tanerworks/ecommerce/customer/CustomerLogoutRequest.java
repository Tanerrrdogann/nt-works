package com.tanerworks.ecommerce.customer;

import jakarta.validation.constraints.NotBlank;

public record CustomerLogoutRequest(
        @NotBlank(message = "Refresh token zorunludur.")
        String refreshToken
) {
}
