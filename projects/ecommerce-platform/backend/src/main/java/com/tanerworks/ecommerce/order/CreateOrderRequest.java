package com.tanerworks.ecommerce.order;

import java.util.List;

import com.tanerworks.ecommerce.cart.CartItemRequest;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record CreateOrderRequest(
        @NotEmpty(message = "Sepet boş olamaz.")
        List<@Valid CartItemRequest> items,

        @NotNull(message = "Müşteri bilgileri zorunludur.")
        @Valid
        CustomerRequest customer
) {
}
