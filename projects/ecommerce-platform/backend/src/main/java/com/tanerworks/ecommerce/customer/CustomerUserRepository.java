package com.tanerworks.ecommerce.customer;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerUserRepository extends JpaRepository<CustomerUser, Long> {
    boolean existsByEmail(String email);

    Optional<CustomerUser> findByEmail(String email);

    Optional<CustomerUser> findByPasswordResetToken(String passwordResetToken);
}
