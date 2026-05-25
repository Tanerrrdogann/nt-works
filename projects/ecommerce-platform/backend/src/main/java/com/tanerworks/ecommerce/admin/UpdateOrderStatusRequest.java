package com.tanerworks.ecommerce.admin;

import com.tanerworks.ecommerce.order.OrderStatus;

import jakarta.validation.constraints.NotNull;

public record UpdateOrderStatusRequest(
        @NotNull(message = "Sipariş durumu zorunludur.")
        OrderStatus status
) {
}
