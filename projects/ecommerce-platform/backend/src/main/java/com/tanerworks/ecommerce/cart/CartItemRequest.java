package com.tanerworks.ecommerce.cart;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record CartItemRequest(
        @NotNull(message = "Ürün ID zorunludur.")
        Long productId,

        @Min(value = 1, message = "Adet en az 1 olmalıdır.")
        int quantity
) {
}
