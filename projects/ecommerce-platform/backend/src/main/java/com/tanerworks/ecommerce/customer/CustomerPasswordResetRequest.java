package com.tanerworks.ecommerce.customer;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CustomerPasswordResetRequest(
        @NotBlank(message = "E-posta zorunludur.")
        @Email(message = "Geçerli bir e-posta girin.")
        String email
) {
}
