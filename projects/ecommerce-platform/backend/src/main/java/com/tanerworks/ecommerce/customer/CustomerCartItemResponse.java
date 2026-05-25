package com.tanerworks.ecommerce.customer;

import java.math.BigDecimal;

import com.tanerworks.ecommerce.product.Product;
import com.tanerworks.ecommerce.product.DiscountType;

public record CustomerCartItemResponse(
        Long productId,
        String slug,
        String name,
        BigDecimal price,
        String imageUrl,
        int stock,
        int quantity,
        DiscountType discountType,
        BigDecimal discountValue,
        int discountMinQuantity
) {
    public static CustomerCartItemResponse from(CustomerCartItem item) {
        Product product = item.getProduct();
        return new CustomerCartItemResponse(
                product.getId(),
                product.getSlug(),
                product.getName(),
                product.getPrice(),
                product.getImageUrl(),
                product.getStock(),
                Math.min(item.getQuantity(), product.getStock()),
                product.getDiscountType(),
                product.getDiscountValue(),
                product.getDiscountMinQuantity()
        );
    }
}
