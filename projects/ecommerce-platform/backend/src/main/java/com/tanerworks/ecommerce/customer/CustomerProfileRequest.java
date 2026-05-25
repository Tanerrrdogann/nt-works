package com.tanerworks.ecommerce.customer;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CustomerProfileRequest(
        @NotBlank(message = "Ad soyad zorunludur.")
        @Size(max = 140, message = "Ad soyad en fazla 140 karakter olabilir.")
        String name,

        @Size(max = 40, message = "Telefon en fazla 40 karakter olabilir.")
        String phone,

        @Size(max = 900, message = "Adres en fazla 900 karakter olabilir.")
        String address,

        @Size(max = 80, message = "İl en fazla 80 karakter olabilir.")
        String city,

        @Size(max = 80, message = "İlçe en fazla 80 karakter olabilir.")
        String district
) {
}
