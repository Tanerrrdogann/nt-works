package com.tanerworks.ecommerce.admin;

import java.math.BigDecimal;
import java.util.List;

import com.tanerworks.ecommerce.product.DiscountType;
import com.tanerworks.ecommerce.product.Product;

public record AdminProductResponse(
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
        String barcode,
        String modelCode,
        DiscountType discountType,
        BigDecimal discountValue,
        int discountMinQuantity
) {
    public static AdminProductResponse from(Product product) {
        return new AdminProductResponse(
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
                product.getBarcode(),
                product.getModelCode(),
                product.getDiscountType(),
                product.getDiscountValue(),
                product.getDiscountMinQuantity()
        );
    }
}
