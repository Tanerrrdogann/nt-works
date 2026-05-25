package com.tanerworks.ecommerce.payment;

import java.util.UUID;

import com.tanerworks.ecommerce.common.BadRequestException;
import com.tanerworks.ecommerce.common.NotFoundException;
import com.tanerworks.ecommerce.notification.EmailNotificationService;
import com.tanerworks.ecommerce.order.Order;
import com.tanerworks.ecommerce.order.OrderRepository;
import com.tanerworks.ecommerce.order.OrderStatus;
import com.tanerworks.ecommerce.product.ProductRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class PaymentService {

    private final OrderRepository orderRepository;
    private final PaymentTransactionRepository paymentTransactionRepository;
    private final ProductRepository productRepository;
    private final EmailNotificationService emailNotificationService;
    private final String frontendBaseUrl;

    public PaymentService(
            OrderRepository orderRepository,
            PaymentTransactionRepository paymentTransactionRepository,
            ProductRepository productRepository,
            EmailNotificationService emailNotificationService,
            @Value("${app.frontend.base-url}") String frontendBaseUrl
    ) {
        this.orderRepository = orderRepository;
        this.paymentTransactionRepository = paymentTransactionRepository;
        this.productRepository = productRepository;
        this.emailNotificationService = emailNotificationService;
        this.frontendBaseUrl = frontendBaseUrl;
    }

    @Transactional
    public PaymentInitializeResponse initialize(PaymentInitializeRequest request) {
        Order order = orderRepository.findByOrderNumber(request.orderNumber())
                .orElseThrow(() -> new NotFoundException("Sipariş bulunamadı."));

        if (order.getStatus() != OrderStatus.PENDING_PAYMENT) {
            throw new BadRequestException("Bu sipariş için ödeme başlatılamaz.");
        }

        String token = UUID.randomUUID().toString();
        PaymentTransaction transaction = paymentTransactionRepository.save(
                new PaymentTransaction(order, "iyzico-test", token, order.getTotalAmount())
        );

        String paymentPageUrl = UriComponentsBuilder
                .fromHttpUrl(frontendBaseUrl)
                .path("/payment/success")
                .queryParam("orderNumber", order.getOrderNumber())
                .queryParam("token", transaction.getToken())
                .build()
                .toUriString();

        return new PaymentInitializeResponse(
                "iyzico-test",
                transaction.getToken(),
                order.getOrderNumber(),
                transaction.getAmount(),
                paymentPageUrl,
                true
        );
    }

    @Transactional
    public PaymentCallbackResponse callback(PaymentCallbackRequest request) {
        PaymentTransaction transaction = paymentTransactionRepository.findByToken(request.token())
                .orElseThrow(() -> new NotFoundException("Ödeme işlemi bulunamadı."));

        Order order = transaction.getOrder();

        if (transaction.getStatus() == PaymentTransactionStatus.SUCCESS) {
            return response(order);
        }

        if ("SUCCESS".equalsIgnoreCase(request.status())) {
            transaction.markSuccess("test-callback-success");
            order.updateStatus(OrderStatus.PAID);
            order.getItems().forEach(item -> productRepository.findById(item.getProductId())
                    .ifPresent(product -> product.reduceStock(item.getQuantity())));
            emailNotificationService.paymentUpdated(order);
        } else {
            transaction.markFailed("test-callback-failed");
            order.updateStatus(OrderStatus.PAYMENT_FAILED);
            emailNotificationService.paymentUpdated(order);
        }

        return response(order);
    }

    private PaymentCallbackResponse response(Order order) {
        return new PaymentCallbackResponse(
                order.getOrderNumber(),
                order.getStatus(),
                order.getPaymentStatus()
        );
    }
}
