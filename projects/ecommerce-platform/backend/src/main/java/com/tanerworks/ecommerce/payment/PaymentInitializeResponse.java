package com.tanerworks.ecommerce.payment;

import java.math.BigDecimal;

public record PaymentInitializeResponse(
        String provider,
        String token,
        String orderNumber,
        BigDecimal amount,
        String paymentPageUrl,
        boolean testMode
) {
}
