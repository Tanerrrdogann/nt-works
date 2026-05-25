package com.tanerworks.ecommerce.customer;

public record CustomerAuthResponse(
        String token,
        CustomerProfileResponse profile
) {
}
