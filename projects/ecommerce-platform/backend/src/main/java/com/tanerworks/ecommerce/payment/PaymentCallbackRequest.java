package com.tanerworks.ecommerce.payment;

import jakarta.validation.constraints.NotBlank;

public record PaymentCallbackRequest(
        @NotBlank(message = "Ödeme token zorunludur.")
        String token,

        @NotBlank(message = "Ödeme sonucu zorunludur.")
        String status
) {
}
