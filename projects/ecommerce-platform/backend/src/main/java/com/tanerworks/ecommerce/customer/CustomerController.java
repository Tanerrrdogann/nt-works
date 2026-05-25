package com.tanerworks.ecommerce.customer;

import java.security.Principal;
import java.util.List;

import com.tanerworks.ecommerce.auth.LoginRequest;
import com.tanerworks.ecommerce.order.OrderResponse;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/auth/register")
    CustomerAuthResponse register(@Valid @RequestBody CustomerRegisterRequest request) {
        return customerService.register(request);
    }

    @PostMapping("/auth/login")
    CustomerAuthResponse login(@Valid @RequestBody LoginRequest request) {
        return customerService.login(request);
    }

    @GetMapping("/me")
    CustomerProfileResponse profile(Principal principal) {
        return customerService.profile(principal.getName());
    }

    @PutMapping("/me")
    CustomerProfileResponse updateProfile(
            Principal principal,
            @Valid @RequestBody CustomerProfileRequest request
    ) {
        return customerService.updateProfile(principal.getName(), request);
    }

    @GetMapping("/cart")
    List<CustomerCartItemResponse> cart(Principal principal) {
        return customerService.cart(principal.getName());
    }

    @PutMapping("/cart")
    List<CustomerCartItemResponse> saveCart(
            Principal principal,
            @Valid @RequestBody CustomerCartRequest request
    ) {
        return customerService.saveCart(principal.getName(), request);
    }

    @GetMapping("/orders")
    List<OrderResponse> orders(Principal principal) {
        return customerService.orders(principal.getName());
    }
}
