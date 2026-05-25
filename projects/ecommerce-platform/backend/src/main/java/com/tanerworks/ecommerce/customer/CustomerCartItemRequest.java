package com.tanerworks.ecommerce.customer;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record CustomerCartItemRequest(
        @NotNull(message = "Ürün zorunludur.")
        Long productId,

        @Min(value = 1, message = "Adet en az 1 olmalıdır.")
        int quantity
) {
}
