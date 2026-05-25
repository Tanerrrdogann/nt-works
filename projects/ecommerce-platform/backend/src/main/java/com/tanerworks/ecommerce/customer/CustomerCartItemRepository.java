package com.tanerworks.ecommerce.customer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerCartItemRepository extends JpaRepository<CustomerCartItem, Long> {
    List<CustomerCartItem> findByCustomerEmailOrderByIdAsc(String email);

    void deleteByCustomerEmail(String email);
}
