package com.tanerworks.ecommerce.customer;

import java.util.List;

import jakarta.validation.Valid;

public record CustomerCartRequest(
        List<@Valid CustomerCartItemRequest> items
) {
}
