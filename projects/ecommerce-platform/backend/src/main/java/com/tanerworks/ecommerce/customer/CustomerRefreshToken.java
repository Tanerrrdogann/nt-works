package com.tanerworks.ecommerce.customer;

import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer_refresh_tokens")
public class CustomerRefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String token;

    @Column(nullable = false)
    private boolean used = false;

    @Column(nullable = false)
    private boolean revoked = false;

    @Column(nullable = false)
    private Instant expiresAt;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @Column(nullable = false)
    private String createdByIp = "";

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerUser customer;

    protected CustomerRefreshToken() {
    }

    public CustomerRefreshToken(CustomerUser customer, String token, Instant expiresAt, String createdByIp) {
        this.customer = customer;
        this.token = token;
        this.expiresAt = expiresAt;
        this.createdByIp = createdByIp == null ? "" : createdByIp;
    }

    @PrePersist
    void prePersist() {
        this.createdAt = Instant.now();
    }

    public String getToken() {
        return token;
    }

    public CustomerUser getCustomer() {
        return customer;
    }

    public boolean isActive() {
        return !used && !revoked && expiresAt.isAfter(Instant.now());
    }

    public void markUsed() {
        this.used = true;
    }

    public void revoke() {
        this.revoked = true;
    }
}
