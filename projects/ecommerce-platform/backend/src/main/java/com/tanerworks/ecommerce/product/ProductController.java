package com.tanerworks.ecommerce.product;

import java.util.List;

import com.tanerworks.ecommerce.common.NotFoundException;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
@Transactional(readOnly = true)
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    List<ProductResponse> listProducts(@RequestParam(required = false) String category) {
        List<Product> products = category == null || category.isBlank()
                ? productRepository.findByActiveTrueOrderByCreatedAtDesc()
                : productRepository.findByActiveTrueAndCategorySlugOrderByCreatedAtDesc(category);

        return products.stream().map(ProductResponse::from).toList();
    }

    @GetMapping("/{slug}")
    ProductResponse getProduct(@PathVariable String slug) {
        Product product = productRepository.findBySlugAndActiveTrue(slug)
                .orElseThrow(() -> new NotFoundException("Ürün bulunamadı."));

        return ProductResponse.from(product);
    }
}
