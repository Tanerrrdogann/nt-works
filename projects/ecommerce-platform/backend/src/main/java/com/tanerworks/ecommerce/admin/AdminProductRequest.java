package com.tanerworks.ecommerce.admin;

import java.math.BigDecimal;
import java.util.List;

import com.tanerworks.ecommerce.product.DiscountType;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AdminProductRequest(
        @NotBlank(message = "Ürün adı zorunludur.")
        @Size(max = 255, message = "Ürün adı en fazla 255 karakter olabilir.")
        String name,

        @NotBlank(message = "Slug zorunludur.")
        @Size(max = 255, message = "Slug en fazla 255 karakter olabilir.")
        String slug,

        @NotBlank(message = "Açıklama zorunludur.")
        @Size(max = 1600, message = "Açıklama en fazla 1600 karakter olabilir.")
        String description,

        @NotNull(message = "Fiyat zorunludur.")
        @DecimalMin(value = "0.01", message = "Fiyat 0'dan büyük olmalıdır.")
        BigDecimal price,

        BigDecimal oldPrice,

        @NotBlank(message = "Kategori adı zorunludur.")
        String category,

        @NotBlank(message = "Kategori slug zorunludur.")
        String categorySlug,

        @NotBlank(message = "Görsel URL zorunludur.")
        @Size(max = 1200, message = "Görsel URL en fazla 1200 karakter olabilir.")
        String imageUrl,

        List<@Size(max = 1200, message = "Görsel URL en fazla 1200 karakter olabilir.") String> imageUrls,

        @Min(value = 0, message = "Stok negatif olamaz.")
        int stock,

        boolean active,

        boolean featured,

        String badge,

        @NotBlank(message = "Materyal bilgisi zorunludur.")
        String material,

        @NotBlank(message = "Teslimat bilgisi zorunludur.")
        String delivery,

        @Size(max = 120, message = "Barkod no en fazla 120 karakter olabilir.")
        String barcode,

        @Size(max = 120, message = "Model kodu en fazla 120 karakter olabilir.")
        String modelCode,

        DiscountType discountType,

        BigDecimal discountValue,

        @Min(value = 1, message = "İndirim için minimum adet en az 1 olmalıdır.")
        int discountMinQuantity
) {
}
