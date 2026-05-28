package com.tanerworks.ecommerce.customer;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CustomerPasswordResetConfirmRequest(
        @NotBlank(message = "Sıfırlama bağlantısı geçersiz.")
        String token,

        @NotBlank(message = "Yeni şifre zorunludur.")
        @Size(min = 6, max = 80, message = "Şifre 6-80 karakter arasında olmalıdır.")
        String password
) {
}
