package com.tanerworks.ecommerce.customer;

import jakarta.validation.constraints.NotBlank;

public record CustomerRefreshRequest(
        @NotBlank(message = "Refresh token zorunludur.")
        String refreshToken
) {
}
