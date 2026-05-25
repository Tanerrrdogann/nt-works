package com.tanerworks.ecommerce.product;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import com.tanerworks.ecommerce.category.Category;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(nullable = false, length = 1600)
    private String description;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    @Column(precision = 12, scale = 2)
    private BigDecimal oldPrice;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false, length = 1200)
    private String imageUrl;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> imageUrls = new ArrayList<>();

    @Column(nullable = false)
    private int stock;

    @Column(nullable = false)
    private boolean active = true;

    private boolean featured;

    private String badge;

    @Column(nullable = false)
    private String material;

    @Column(nullable = false)
    private String delivery;

    private String barcode;

    private String modelCode;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DiscountType discountType = DiscountType.NONE;

    @Column(precision = 12, scale = 2)
    private BigDecimal discountValue = BigDecimal.ZERO;

    @Column(nullable = false)
    private int discountMinQuantity = 1;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @Column(nullable = false)
    private Instant updatedAt;

    protected Product() {
    }

    public Product(
            String name,
            String slug,
            String description,
            BigDecimal price,
            BigDecimal oldPrice,
            Category category,
            String imageUrl,
            int stock,
            boolean active,
            boolean featured,
            String badge,
            String material,
            String delivery
    ) {
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.price = price;
        this.oldPrice = oldPrice;
        this.category = category;
        this.imageUrl = imageUrl;
        this.imageUrls = new ArrayList<>(List.of(imageUrl));
        this.stock = stock;
        this.active = active;
        this.featured = featured;
        this.badge = badge;
        this.material = material;
        this.delivery = delivery;
    }

    @PrePersist
    void prePersist() {
        Instant now = Instant.now();
        this.createdAt = now;
        this.updatedAt = now;
    }

    @PreUpdate
    void preUpdate() {
        this.updatedAt = Instant.now();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSlug() {
        return slug;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public BigDecimal getOldPrice() {
        return oldPrice;
    }

    public Category getCategory() {
        return category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public List<String> getImageUrls() {
        if (imageUrls == null || imageUrls.isEmpty()) {
            return List.of(imageUrl);
        }

        return imageUrls;
    }

    public int getStock() {
        return stock;
    }

    public boolean isActive() {
        return active;
    }

    public boolean isFeatured() {
        return featured;
    }

    public String getBadge() {
        return badge;
    }

    public String getMaterial() {
        return material;
    }

    public String getDelivery() {
        return delivery;
    }

    public String getBarcode() {
        return barcode;
    }

    public String getModelCode() {
        return modelCode;
    }

    public DiscountType getDiscountType() {
        return discountType;
    }

    public BigDecimal getDiscountValue() {
        return discountValue == null ? BigDecimal.ZERO : discountValue;
    }

    public int getDiscountMinQuantity() {
        return Math.max(1, discountMinQuantity);
    }

    public BigDecimal getEffectivePrice(int quantity) {
        if (quantity < getDiscountMinQuantity() || discountType == null || discountType == DiscountType.NONE) {
            return price;
        }

        BigDecimal discount = switch (discountType) {
            case PERCENT -> price.multiply(getDiscountValue()).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            case FIXED -> getDiscountValue();
            case NONE -> BigDecimal.ZERO;
        };

        return price.subtract(discount).max(BigDecimal.ZERO).setScale(2, RoundingMode.HALF_UP);
    }

    public void update(
            String name,
            String slug,
            String description,
            BigDecimal price,
            BigDecimal oldPrice,
            Category category,
            String imageUrl,
            int stock,
            boolean active,
            boolean featured,
            String badge,
            String material,
            String delivery
    ) {
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.price = price;
        this.oldPrice = oldPrice;
        this.category = category;
        this.imageUrl = imageUrl;
        this.stock = stock;
        this.active = active;
        this.featured = featured;
        this.badge = badge;
        this.material = material;
        this.delivery = delivery;
    }

    public void updateAdminFields(
            List<String> imageUrls,
            String barcode,
            String modelCode,
            DiscountType discountType,
            BigDecimal discountValue,
            int discountMinQuantity
    ) {
        List<String> normalizedImages = imageUrls == null
                ? List.of()
                : imageUrls.stream().filter(url -> url != null && !url.isBlank()).distinct().toList();

        if (!normalizedImages.isEmpty()) {
            this.imageUrls = new ArrayList<>(normalizedImages);
            this.imageUrl = normalizedImages.get(0);
        }

        this.barcode = barcode;
        this.modelCode = modelCode;
        this.discountType = discountType == null ? DiscountType.NONE : discountType;
        this.discountValue = discountValue == null ? BigDecimal.ZERO : discountValue;
        this.discountMinQuantity = Math.max(1, discountMinQuantity);
    }

    public void deactivate() {
        this.active = false;
    }

    public void reduceStock(int quantity) {
        this.stock = Math.max(0, this.stock - quantity);
    }
}
