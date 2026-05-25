package com.tanerworks.ecommerce.payment;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/initialize")
    PaymentInitializeResponse initialize(@Valid @RequestBody PaymentInitializeRequest request) {
        return paymentService.initialize(request);
    }

    @PostMapping("/callback")
    PaymentCallbackResponse callback(@Valid @RequestBody PaymentCallbackRequest request) {
        return paymentService.callback(request);
    }
}
