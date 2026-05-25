package com.tanerworks.ecommerce.payment;

import jakarta.validation.constraints.NotBlank;

public record PaymentInitializeRequest(
        @NotBlank(message = "Sipariş numarası zorunludur.")
        String orderNumber
) {
}
