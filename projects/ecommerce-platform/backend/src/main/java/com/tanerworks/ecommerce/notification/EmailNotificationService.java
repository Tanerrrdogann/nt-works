package com.tanerworks.ecommerce.notification;

import java.nio.charset.StandardCharsets;

import com.tanerworks.ecommerce.order.Order;
import com.tanerworks.ecommerce.order.OrderItem;
import com.tanerworks.ecommerce.order.OrderStatus;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailNotificationService {

    private static final Logger log = LoggerFactory.getLogger(EmailNotificationService.class);

    private final JavaMailSender mailSender;
    private final boolean enabled;
    private final String username;
    private final String password;
    private final String adminRecipient;
    private final String frontendBaseUrl;

    public EmailNotificationService(
            JavaMailSender mailSender,
            @Value("${app.mail.enabled}") boolean enabled,
            @Value("${spring.mail.username:}") String username,
            @Value("${spring.mail.password:}") String password,
            @Value("${app.mail.admin-recipient:}") String adminRecipient,
            @Value("${app.frontend.base-url}") String frontendBaseUrl
    ) {
        this.mailSender = mailSender;
        this.enabled = enabled;
        this.username = username;
        this.password = password;
        this.adminRecipient = adminRecipient;
        this.frontendBaseUrl = frontendBaseUrl;
    }

    @Async
    public void orderCreated(Order order) {
        sendAdmin(
                "Yeni sipariş oluşturuldu - " + order.getOrderNumber(),
                """
                Yeni bir sipariş oluşturuldu.

                %s

                Admin panel:
                %s/admin/orders/%s
                """.formatted(orderSummary(order), frontendBaseUrl, order.getId())
        );

        sendCustomer(
                order,
                "Siparişiniz alındı - " + order.getOrderNumber(),
                """
                Merhaba %s,

                Siparişiniz oluşturuldu. Ödeme tamamlandıktan sonra hazırlık sürecine alınacaktır.

                %s

                Sipariş durumunu buradan takip edebilirsiniz:
                %s/order-status
                """.formatted(order.getCustomerName(), orderSummary(order), frontendBaseUrl)
        );
    }

    @Async
    public void paymentUpdated(Order order) {
        sendAdmin(
                "Ödeme durumu güncellendi - " + order.getOrderNumber(),
                """
                Sipariş ödeme durumu güncellendi.

                Sipariş durumu: %s
                Ödeme durumu: %s

                %s
                """.formatted(statusLabel(order.getStatus()), order.getPaymentStatus(), orderSummary(order))
        );

        sendCustomer(
                order,
                "Ödeme durumunuz güncellendi - " + order.getOrderNumber(),
                """
                Merhaba %s,

                Siparişinizin ödeme durumu güncellendi.

                Sipariş durumu: %s
                Ödeme durumu: %s

                Sipariş durumunu buradan takip edebilirsiniz:
                %s/order-status
                """.formatted(order.getCustomerName(), statusLabel(order.getStatus()), order.getPaymentStatus(), frontendBaseUrl)
        );
    }

    @Async
    public void orderStatusUpdated(Order order) {
        sendAdmin(
                "Sipariş durumu güncellendi - " + order.getOrderNumber(),
                "Sipariş durumu güncellendi.\n\nDurum: %s\n\n%s".formatted(
                        statusLabel(order.getStatus()),
                        orderSummary(order)
                )
        );

        sendCustomer(
                order,
                "Sipariş durumunuz güncellendi - " + order.getOrderNumber(),
                """
                Merhaba %s,

                Siparişinizin güncel durumu: %s

                Sipariş durumunu buradan takip edebilirsiniz:
                %s/order-status
                """.formatted(order.getCustomerName(), statusLabel(order.getStatus()), frontendBaseUrl)
        );
    }

    @Async
    public void returnRequested(Order order, String reason) {
        sendAdmin(
                "İade/değişim talebi - " + order.getOrderNumber(),
                """
                Müşteri iade/değişim talebi oluşturdu.

                Talep nedeni:
                %s

                %s
                """.formatted(reason, orderSummary(order))
        );

        sendCustomer(
                order,
                "İade/değişim talebiniz alındı - " + order.getOrderNumber(),
                """
                Merhaba %s,

                %s numaralı siparişiniz için iade/değişim talebiniz alındı.
                En kısa sürede sizinle iletişime geçilecektir.

                Talep nedeni:
                %s
                """.formatted(order.getCustomerName(), order.getOrderNumber(), reason)
        );
    }

    public boolean passwordResetRequested(String email, String resetUrl) {
        return send(
                email,
                "Şifre sıfırlama bağlantınız",
                """
                Merhaba,

                Teddy Jewellry hesabınız için şifre sıfırlama talebi aldık.
                Yeni şifre belirlemek için aşağıdaki bağlantıyı kullanabilirsiniz:

                %s

                Bu bağlantı 30 dakika geçerlidir. Bu talebi siz oluşturmadıysanız bu e-postayı yok sayabilirsiniz.
                """.formatted(resetUrl)
        );
    }

    private void sendAdmin(String subject, String body) {
        if (adminRecipient == null || adminRecipient.isBlank()) {
            return;
        }

        send(adminRecipient, subject, body);
    }

    private void sendCustomer(Order order, String subject, String body) {
        send(order.getCustomerEmail(), subject, body);
    }

    private boolean send(String to, String subject, String body) {
        if (!enabled || username == null || username.isBlank() || password == null || password.isBlank() || to == null || to.isBlank()) {
            return false;
        }

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(username);
            message.setTo(to);
            message.setSubject(subject);
            message.setText(new String(body.getBytes(StandardCharsets.UTF_8), StandardCharsets.UTF_8));
            mailSender.send(message);
            return true;
        } catch (MailException exception) {
            log.warn("Mail gönderilemedi: {}", exception.getMessage());
            return false;
        }
    }

    private String orderSummary(Order order) {
        StringBuilder builder = new StringBuilder();
        builder.append("Sipariş No: ").append(order.getOrderNumber()).append('\n');
        builder.append("Müşteri: ").append(order.getCustomerName()).append('\n');
        builder.append("E-posta: ").append(order.getCustomerEmail()).append('\n');
        builder.append("Adres: ")
                .append(order.getAddress())
                .append(", ")
                .append(order.getDistrict())
                .append("/")
                .append(order.getCity())
                .append('\n');
        builder.append("Toplam: ").append(order.getTotalAmount()).append(" TL").append('\n');
        builder.append("Durum: ").append(statusLabel(order.getStatus())).append('\n');
        builder.append("Ürünler:").append('\n');

        for (OrderItem item : order.getItems()) {
            builder.append("- ")
                    .append(item.getProductName())
                    .append(" x ")
                    .append(item.getQuantity())
                    .append(" = ")
                    .append(item.getTotalPrice())
                    .append(" TL")
                    .append('\n');
        }

        return builder.toString();
    }

    private String statusLabel(OrderStatus status) {
        return switch (status) {
            case PENDING_PAYMENT -> "Ödeme bekleniyor";
            case PAID -> "Ödeme alındı";
            case PAYMENT_FAILED -> "Ödeme başarısız";
            case CANCELLED -> "İptal edildi";
            case PREPARING -> "Hazırlanıyor";
            case SHIPPED -> "Sipariş yolda";
            case COMPLETED -> "Tamamlandı";
        };
    }
}
