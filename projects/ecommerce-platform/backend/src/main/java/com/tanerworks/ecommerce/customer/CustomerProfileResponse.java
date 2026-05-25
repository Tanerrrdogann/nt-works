package com.tanerworks.ecommerce.customer;

public record CustomerProfileResponse(
        String email,
        String name,
        String phone,
        String address,
        String city,
        String district
) {
    public static CustomerProfileResponse from(CustomerUser user) {
        return new CustomerProfileResponse(
                user.getEmail(),
                user.getName(),
                user.getPhone(),
                user.getAddress(),
                user.getCity(),
                user.getDistrict()
        );
    }
}
