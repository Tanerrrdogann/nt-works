package com.tanerworks.ecommerce.admin;

import java.util.List;

import com.tanerworks.ecommerce.common.BadRequestException;
import com.tanerworks.ecommerce.common.NotFoundException;
import com.tanerworks.ecommerce.order.Order;
import com.tanerworks.ecommerce.order.OrderRepository;
import com.tanerworks.ecommerce.order.OrderResponse;
import com.tanerworks.ecommerce.order.OrderStatus;
import com.tanerworks.ecommerce.notification.EmailNotificationService;

import jakarta.validation.Valid;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/orders")
public class AdminOrderController {

    private final OrderRepository orderRepository;
    private final EmailNotificationService emailNotificationService;

    public AdminOrderController(
            OrderRepository orderRepository,
            EmailNotificationService emailNotificationService
    ) {
        this.orderRepository = orderRepository;
        this.emailNotificationService = emailNotificationService;
    }

    @GetMapping
    List<OrderResponse> listOrders() {
        return orderRepository.findAll()
                .stream()
                .map(OrderResponse::from)
                .toList();
    }

    @GetMapping("/{id}")
    OrderResponse getOrder(@PathVariable Long id) {
        return OrderResponse.from(findOrder(id));
    }

    @PutMapping("/{id}/status")
    @Transactional
    OrderResponse updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody UpdateOrderStatusRequest request
    ) {
        Order order = findOrder(id);
        if (request.status() != OrderStatus.PREPARING && request.status() != OrderStatus.SHIPPED) {
            throw new BadRequestException("Admin yalnızca 'Hazırlanıyor' veya 'Sipariş yolda' durumunu seçebilir.");
        }

        order.updateStatus(request.status());
        emailNotificationService.orderStatusUpdated(order);

        return OrderResponse.from(orderRepository.save(order));
    }

    private Order findOrder(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Sipariş bulunamadı."));
    }
}
