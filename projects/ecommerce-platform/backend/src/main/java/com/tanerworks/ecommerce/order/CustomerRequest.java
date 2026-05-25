package com.tanerworks.ecommerce.order;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CustomerRequest(
        @NotBlank(message = "Ad soyad zorunludur.")
        @Size(max = 140, message = "Ad soyad en fazla 140 karakter olabilir.")
        String name,

        @NotBlank(message = "E-posta zorunludur.")
        @Email(message = "Geçerli bir e-posta girin.")
        @Size(max = 180, message = "E-posta en fazla 180 karakter olabilir.")
        String email,

        @Size(max = 40, message = "Telefon en fazla 40 karakter olabilir.")
        String phone,

        @NotBlank(message = "Adres zorunludur.")
        @Size(max = 900, message = "Adres en fazla 900 karakter olabilir.")
        String address,

        @NotBlank(message = "İl zorunludur.")
        @Size(max = 80, message = "İl en fazla 80 karakter olabilir.")
        String city,

        @NotBlank(message = "İlçe zorunludur.")
        @Size(max = 80, message = "İlçe en fazla 80 karakter olabilir.")
        String district,

        @Size(max = 600, message = "Sipariş notu en fazla 600 karakter olabilir.")
        String note
) {
}
