package com.tanerworks.ecommerce.payment;

import com.tanerworks.ecommerce.order.OrderStatus;
import com.tanerworks.ecommerce.order.PaymentStatus;

public record PaymentCallbackResponse(
        String orderNumber,
        OrderStatus orderStatus,
        PaymentStatus paymentStatus
) {
}
