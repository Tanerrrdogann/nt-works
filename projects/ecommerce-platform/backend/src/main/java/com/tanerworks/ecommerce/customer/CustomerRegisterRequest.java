package com.tanerworks.ecommerce.customer;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CustomerRegisterRequest(
        @NotBlank(message = "Ad soyad zorunludur.")
        @Size(max = 140, message = "Ad soyad en fazla 140 karakter olabilir.")
        String name,

        @NotBlank(message = "E-posta zorunludur.")
        @Email(message = "Geçerli bir e-posta girin.")
        String email,

        @NotBlank(message = "Şifre zorunludur.")
        @Size(min = 6, max = 80, message = "Şifre 6-80 karakter arasında olmalıdır.")
        String password
) {
}
