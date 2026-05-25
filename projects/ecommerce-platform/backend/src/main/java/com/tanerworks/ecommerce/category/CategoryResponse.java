package com.tanerworks.ecommerce.category;

public record CategoryResponse(
        Long id,
        String name,
        String slug,
        String imageUrl,
        boolean active
) {
    public static CategoryResponse from(Category category) {
        return new CategoryResponse(
                category.getId(),
                category.getName(),
                category.getSlug(),
                category.getImageUrl(),
                category.isActive()
        );
    }
}
