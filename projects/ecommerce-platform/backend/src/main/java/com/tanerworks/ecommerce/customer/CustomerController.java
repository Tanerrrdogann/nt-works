package com.tanerworks.ecommerce.customer;

import java.security.Principal;
import java.util.List;

import com.tanerworks.ecommerce.auth.LoginRequest;
import com.tanerworks.ecommerce.order.OrderResponse;

import jakarta.validation.Valid;
import jakarta.servlet.http.HttpServletRequest;

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
    CustomerAuthResponse register(@Valid @RequestBody CustomerRegisterRequest request, HttpServletRequest servletRequest) {
        return customerService.register(request, clientIp(servletRequest));
    }

    @PostMapping("/auth/login")
    CustomerAuthResponse login(@Valid @RequestBody LoginRequest request, HttpServletRequest servletRequest) {
        return customerService.login(request, clientIp(servletRequest));
    }

    @PostMapping("/auth/refresh")
    CustomerAuthResponse refresh(@Valid @RequestBody CustomerRefreshRequest request, HttpServletRequest servletRequest) {
        return customerService.refresh(request, clientIp(servletRequest));
    }

    @PostMapping("/auth/logout")
    CustomerPasswordResetResponse logout(@Valid @RequestBody CustomerLogoutRequest request) {
        return customerService.logout(request);
    }

    @PostMapping("/auth/password-reset/request")
    CustomerPasswordResetResponse requestPasswordReset(@Valid @RequestBody CustomerPasswordResetRequest request) {
        return customerService.requestPasswordReset(request);
    }

    @PostMapping("/auth/password-reset/confirm")
    CustomerPasswordResetResponse resetPassword(@Valid @RequestBody CustomerPasswordResetConfirmRequest request) {
        return customerService.resetPassword(request);
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

    private String clientIp(HttpServletRequest request) {
        String forwardedFor = request.getHeader("X-Forwarded-For");
        if (forwardedFor != null && !forwardedFor.isBlank()) {
            return forwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }
}
