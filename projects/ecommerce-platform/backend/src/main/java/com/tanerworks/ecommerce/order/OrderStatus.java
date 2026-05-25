package com.tanerworks.ecommerce.order;

public enum OrderStatus {
    PENDING_PAYMENT,
    PAID,
    PAYMENT_FAILED,
    CANCELLED,
    PREPARING,
    SHIPPED,
    COMPLETED
}
