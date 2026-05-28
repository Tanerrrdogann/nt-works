package com.tanerworks.ecommerce.customer;

import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRefreshTokenRepository extends JpaRepository<CustomerRefreshToken, Long> {
    Optional<CustomerRefreshToken> findByToken(String token);

    List<CustomerRefreshToken> findByCustomer(CustomerUser customer);
}
