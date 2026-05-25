package com.tanerworks.ecommerce.order;

import java.math.BigDecimal;
import java.time.Year;
import java.util.HashMap;
import java.util.Map;

import com.tanerworks.ecommerce.cart.CartItemRequest;
import com.tanerworks.ecommerce.common.BadRequestException;
import com.tanerworks.ecommerce.common.NotFoundException;
import com.tanerworks.ecommerce.notification.EmailNotificationService;
import com.tanerworks.ecommerce.product.Product;
import com.tanerworks.ecommerce.product.ProductRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Value;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final BigDecimal shippingFee;
    private final int freeShippingItemThreshold;
    private final String shippingCarrier;
    private final EmailNotificationService emailNotificationService;

    public OrderService(
            OrderRepository orderRepository,
            ProductRepository productRepository,
            EmailNotificationService emailNotificationService,
            @Value("${app.shipping.fee}") BigDecimal shippingFee,
            @Value("${app.shipping.free-item-threshold}") int freeShippingItemThreshold,
            @Value("${app.shipping.carrier}") String shippingCarrier
    ) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.emailNotificationService = emailNotificationService;
        this.shippingFee = shippingFee;
        this.freeShippingItemThreshold = freeShippingItemThreshold;
        this.shippingCarrier = shippingCarrier;
    }

    @Transactional
    public OrderResponse createOrder(CreateOrderRequest request) {
        Map<Long, Integer> requestedQuantities = mergeQuantities(request);
        BigDecimal subtotal = BigDecimal.ZERO;
        int totalQuantity = requestedQuantities.values().stream().mapToInt(Integer::intValue).sum();
        Order order = new Order(
                nextOrderNumber(),
                request.customer().name(),
                request.customer().email(),
                normalizedPhone(request.customer().phone()),
                request.customer().address(),
                request.customer().city(),
                request.customer().district(),
                request.customer().note(),
                BigDecimal.ZERO,
                getShippingAmount(totalQuantity),
                shippingCarrier,
                BigDecimal.ZERO,
                OrderStatus.PENDING_PAYMENT,
                PaymentStatus.PENDING,
                "iyzico-test"
        );

        for (Map.Entry<Long, Integer> entry : requestedQuantities.entrySet()) {
            Product product = productRepository.findById(entry.getKey())
                    .orElseThrow(() -> new NotFoundException("Sepetteki ürün bulunamadı: " + entry.getKey()));

            int quantity = entry.getValue();

            if (!product.isActive()) {
                throw new BadRequestException(product.getName() + " artık satışta değil.");
            }

            if (product.getStock() < quantity) {
                throw new BadRequestException(product.getName() + " için yeterli stok yok.");
            }

            OrderItem orderItem = new OrderItem(
                    product.getId(),
                    product.getName(),
                    product.getEffectivePrice(quantity),
                    quantity
            );

            subtotal = subtotal.add(orderItem.getTotalPrice());
            order.addItem(orderItem);
        }

        BigDecimal shippingAmount = getShippingAmount(totalQuantity);
        Order savedOrder = orderRepository.save(new Order(
                order.getOrderNumber(),
                order.getCustomerName(),
                order.getCustomerEmail(),
                normalizedPhone(order.getCustomerPhone()),
                order.getAddress(),
                order.getCity(),
                order.getDistrict(),
                order.getNote(),
                subtotal,
                shippingAmount,
                shippingCarrier,
                subtotal.add(shippingAmount),
                OrderStatus.PENDING_PAYMENT,
                PaymentStatus.PENDING,
                "iyzico-test"
        ));

        order.getItems().forEach(savedOrder::addItem);

        Order persistedOrder = orderRepository.save(savedOrder);
        emailNotificationService.orderCreated(persistedOrder);

        return OrderResponse.from(persistedOrder);
    }

    @Transactional(readOnly = true)
    public OrderResponse getOrder(String orderNumber) {
        Order order = orderRepository.findByOrderNumber(orderNumber)
                .orElseThrow(() -> new NotFoundException("Sipariş bulunamadı."));

        return OrderResponse.from(order);
    }

    @Transactional
    public OrderResponse requestReturn(String orderNumber, ReturnRequest request) {
        Order order = orderRepository.findByOrderNumber(orderNumber)
                .orElseThrow(() -> new NotFoundException("Sipariş bulunamadı."));

        emailNotificationService.returnRequested(order, request.reason());

        return OrderResponse.from(order);
    }

    private Map<Long, Integer> mergeQuantities(CreateOrderRequest request) {
        Map<Long, Integer> quantities = new HashMap<>();

        for (CartItemRequest item : request.items()) {
            quantities.merge(item.productId(), item.quantity(), Integer::sum);
        }

        return quantities;
    }

    private String nextOrderNumber() {
        return "ORD-" + Year.now().getValue() + "-" + System.nanoTime();
    }

    private BigDecimal getShippingAmount(int totalQuantity) {
        return totalQuantity >= freeShippingItemThreshold ? BigDecimal.ZERO : shippingFee;
    }

    private String normalizedPhone(String phone) {
        return phone == null || phone.isBlank() ? "" : phone;
    }
}
