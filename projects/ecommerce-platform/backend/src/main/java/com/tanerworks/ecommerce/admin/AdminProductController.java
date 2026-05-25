package com.tanerworks.ecommerce.admin;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.UUID;

import com.tanerworks.ecommerce.category.Category;
import com.tanerworks.ecommerce.category.CategoryRepository;
import com.tanerworks.ecommerce.common.BadRequestException;
import com.tanerworks.ecommerce.common.NotFoundException;
import com.tanerworks.ecommerce.product.Product;
import com.tanerworks.ecommerce.product.ProductRepository;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/admin/products")
@Transactional(readOnly = true)
public class AdminProductController {

    private static final Set<String> ALLOWED_IMAGE_TYPES = Set.of("image/jpeg", "image/png", "image/webp");
    private static final long MAX_IMAGE_SIZE = 5 * 1024 * 1024;

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final Path productImageDir;
    private final String backendPublicUrl;

    public AdminProductController(
            ProductRepository productRepository,
            CategoryRepository categoryRepository,
            @Value("${app.upload.product-image-dir}") String productImageDir,
            @Value("${app.backend.public-url}") String backendPublicUrl
    ) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.productImageDir = Paths.get(productImageDir).toAbsolutePath().normalize();
        this.backendPublicUrl = backendPublicUrl.replaceAll("/$", "");
    }

    @GetMapping
    List<AdminProductResponse> listProducts() {
        return productRepository.findAll()
                .stream()
                .map(AdminProductResponse::from)
                .toList();
    }

    @GetMapping("/{id}")
    AdminProductResponse getProduct(@PathVariable Long id) {
        return AdminProductResponse.from(findProduct(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Transactional
    AdminProductResponse createProduct(@Valid @RequestBody AdminProductRequest request) {
        Category category = findOrCreateCategory(request);
        Product product = new Product(
                request.name(),
                request.slug(),
                request.description(),
                request.price(),
                request.oldPrice(),
                category,
                request.imageUrl(),
                request.stock(),
                request.active(),
                request.featured(),
                request.badge(),
                request.material(),
                request.delivery()
        );
        product.updateAdminFields(
                normalizedImages(request),
                request.barcode(),
                request.modelCode(),
                request.discountType(),
                request.discountValue(),
                request.discountMinQuantity()
        );

        return AdminProductResponse.from(productRepository.save(product));
    }

    @PostMapping(path = "/images", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    ImageUploadResponse uploadProductImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            throw new BadRequestException("Görsel dosyası seçilmelidir.");
        }

        if (file.getSize() > MAX_IMAGE_SIZE) {
            throw new BadRequestException("Görsel en fazla 5 MB olabilir.");
        }

        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_IMAGE_TYPES.contains(contentType.toLowerCase(Locale.ROOT))) {
            throw new BadRequestException("Sadece JPG, PNG veya WEBP görseller yüklenebilir.");
        }

        String extension = switch (contentType.toLowerCase(Locale.ROOT)) {
            case "image/png" -> ".png";
            case "image/webp" -> ".webp";
            default -> ".jpg";
        };

        try {
            Files.createDirectories(productImageDir);
            String filename = UUID.randomUUID() + extension;
            Path target = productImageDir.resolve(filename).normalize();
            file.transferTo(target);

            return new ImageUploadResponse(backendPublicUrl + "/uploads/products/" + filename);
        } catch (IOException exception) {
            throw new BadRequestException("Görsel yüklenemedi. Lütfen tekrar deneyin.");
        }
    }

    @PutMapping("/{id}")
    @Transactional
    AdminProductResponse updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody AdminProductRequest request
    ) {
        Product product = findProduct(id);
        Category category = findOrCreateCategory(request);

        product.update(
                request.name(),
                request.slug(),
                request.description(),
                request.price(),
                request.oldPrice(),
                category,
                request.imageUrl(),
                request.stock(),
                request.active(),
                request.featured(),
                request.badge(),
                request.material(),
                request.delivery()
        );
        product.updateAdminFields(
                normalizedImages(request),
                request.barcode(),
                request.modelCode(),
                request.discountType(),
                request.discountValue(),
                request.discountMinQuantity()
        );

        return AdminProductResponse.from(productRepository.save(product));
    }

    @DeleteMapping("/{id}")
    @Transactional
    AdminProductResponse deactivateProduct(@PathVariable Long id) {
        Product product = findProduct(id);
        product.deactivate();

        return AdminProductResponse.from(productRepository.save(product));
    }

    private Product findProduct(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Ürün bulunamadı."));
    }

    private Category findOrCreateCategory(AdminProductRequest request) {
        return categoryRepository.findBySlug(request.categorySlug())
                .orElseGet(() -> categoryRepository.save(
                        new Category(request.category(), request.categorySlug(), null, true)
                ));
    }

    private List<String> normalizedImages(AdminProductRequest request) {
        List<String> images = request.imageUrls() == null ? List.of() : request.imageUrls();
        List<String> normalized = images.stream()
                .filter(url -> url != null && !url.isBlank())
                .distinct()
                .toList();

        return normalized.isEmpty() ? List.of(request.imageUrl()) : normalized;
    }
}
