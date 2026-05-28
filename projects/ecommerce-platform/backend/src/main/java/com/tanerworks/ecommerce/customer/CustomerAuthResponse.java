package com.tanerworks.ecommerce.customer;

public record CustomerAuthResponse(
        String token,
        String refreshToken,
        CustomerProfileResponse profile
) {
}
