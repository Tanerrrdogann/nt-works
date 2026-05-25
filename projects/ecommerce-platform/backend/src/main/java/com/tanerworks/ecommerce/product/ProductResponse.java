package com.tanerworks.ecommerce.product;

import java.math.BigDecimal;
import java.util.List;

public record ProductResponse(
        Long id,
        String name,
        String slug,
        String description,
        BigDecimal price,
        BigDecimal oldPrice,
        String category,
        String categorySlug,
        String imageUrl,
        List<String> imageUrls,
        int stock,
        boolean active,
        boolean featured,
        String badge,
        String material,
        String delivery,
        DiscountType discountType,
        BigDecimal discountValue,
        int discountMinQuantity
) {
    public static ProductResponse from(Product product) {
        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getSlug(),
                product.getDescription(),
                product.getPrice(),
                product.getOldPrice(),
                product.getCategory().getName(),
                product.getCategory().getSlug(),
                product.getImageUrl(),
                product.getImageUrls(),
                product.getStock(),
                product.isActive(),
                product.isFeatured(),
                product.getBadge(),
                product.getMaterial(),
                product.getDelivery(),
                product.getDiscountType(),
                product.getDiscountValue(),
                product.getDiscountMinQuantity()
        );
    }
}
