package com.tanerworks.ecommerce.payment;

import java.math.BigDecimal;
import java.time.Instant;

import com.tanerworks.ecommerce.order.Order;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "payment_transactions")
public class PaymentTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Column(nullable = false)
    private String provider;

    private String providerPaymentId;

    @Column(nullable = false, unique = true)
    private String token;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentTransactionStatus status;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal amount;

    @Column(length = 2000)
    private String rawResponse;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    protected PaymentTransaction() {
    }

    public PaymentTransaction(Order order, String provider, String token, BigDecimal amount) {
        this.order = order;
        this.provider = provider;
        this.token = token;
        this.amount = amount;
        this.status = PaymentTransactionStatus.PENDING;
    }

    @PrePersist
    void prePersist() {
        this.createdAt = Instant.now();
    }

    public Order getOrder() {
        return order;
    }

    public String getToken() {
        return token;
    }

    public PaymentTransactionStatus getStatus() {
        return status;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void markSuccess(String rawResponse) {
        this.status = PaymentTransactionStatus.SUCCESS;
        this.rawResponse = rawResponse;
        this.providerPaymentId = "TEST-" + token;
    }

    public void markFailed(String rawResponse) {
        this.status = PaymentTransactionStatus.FAILED;
        this.rawResponse = rawResponse;
        this.providerPaymentId = "TEST-" + token;
    }
}
