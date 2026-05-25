package com.tanerworks.ecommerce.order;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ReturnRequest(
        @NotBlank(message = "İade/değişim nedeni zorunludur.")
        @Size(max = 1000, message = "İade/değişim nedeni en fazla 1000 karakter olabilir.")
        String reason
) {
}
