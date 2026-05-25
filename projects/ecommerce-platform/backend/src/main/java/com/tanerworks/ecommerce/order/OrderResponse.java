package com.tanerworks.ecommerce.order;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

public record OrderResponse(
        Long id,
        String orderNumber,
        String customerName,
        String customerEmail,
        String customerPhone,
        String address,
        String city,
        String district,
        String note,
        BigDecimal subtotalAmount,
        BigDecimal shippingAmount,
        String shippingCarrier,
        BigDecimal totalAmount,
        OrderStatus status,
        PaymentStatus paymentStatus,
        String paymentProvider,
        Instant createdAt,
        List<OrderItemResponse> items
) {
    public static OrderResponse from(Order order) {
        return new OrderResponse(
                order.getId(),
                order.getOrderNumber(),
                order.getCustomerName(),
                order.getCustomerEmail(),
                order.getCustomerPhone(),
                order.getAddress(),
                order.getCity(),
                order.getDistrict(),
                order.getNote(),
                order.getSubtotalAmount(),
                order.getShippingAmount(),
                order.getShippingCarrier(),
                order.getTotalAmount(),
                order.getStatus(),
                order.getPaymentStatus(),
                order.getPaymentProvider(),
                order.getCreatedAt(),
                order.getItems().stream().map(OrderItemResponse::from).toList()
        );
    }
}
