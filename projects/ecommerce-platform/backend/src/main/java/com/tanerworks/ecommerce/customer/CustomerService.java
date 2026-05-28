package com.tanerworks.ecommerce.customer;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.UUID;

import com.tanerworks.ecommerce.auth.JwtService;
import com.tanerworks.ecommerce.auth.LoginRequest;
import com.tanerworks.ecommerce.common.BadRequestException;
import com.tanerworks.ecommerce.common.NotFoundException;
import com.tanerworks.ecommerce.notification.EmailNotificationService;
import com.tanerworks.ecommerce.order.OrderRepository;
import com.tanerworks.ecommerce.order.OrderResponse;
import com.tanerworks.ecommerce.product.Product;
import com.tanerworks.ecommerce.product.ProductRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomerService {

    private static final String CUSTOMER_ROLE = "CUSTOMER";
    private static final int MAX_FAILED_LOGIN_ATTEMPTS = 5;

    private final CustomerUserRepository customerUserRepository;
    private final CustomerRefreshTokenRepository refreshTokenRepository;
    private final CustomerCartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final EmailNotificationService emailNotificationService;
    private final String frontendBaseUrl;
    private final long refreshTokenDays;

    public CustomerService(
            CustomerUserRepository customerUserRepository,
            CustomerRefreshTokenRepository refreshTokenRepository,
            CustomerCartItemRepository cartItemRepository,
            ProductRepository productRepository,
            OrderRepository orderRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService,
            EmailNotificationService emailNotificationService,
            @Value("${app.frontend.base-url}") String frontendBaseUrl,
            @Value("${app.customer.refresh-token-days:7}") long refreshTokenDays
    ) {
        this.customerUserRepository = customerUserRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.cartItemRepository = cartItemRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.emailNotificationService = emailNotificationService;
        this.frontendBaseUrl = frontendBaseUrl.replaceAll("/$", "");
        this.refreshTokenDays = refreshTokenDays;
    }

    @Transactional
    public CustomerAuthResponse register(CustomerRegisterRequest request, String ip) {
        String email = request.email().trim().toLowerCase();

        if (customerUserRepository.existsByEmail(email)) {
            throw new BadRequestException("Bu kullanıcı zaten mevcut.");
        }

        CustomerUser user = customerUserRepository.save(new CustomerUser(
                email,
                passwordEncoder.encode(request.password()),
                request.name().trim()
        ));

        return authResponse(user, ip);
    }

    @Transactional
    public CustomerAuthResponse login(LoginRequest request, String ip) {
        CustomerUser user = customerUserRepository.findByEmail(request.email().trim().toLowerCase())
                .orElseThrow(() -> new BadRequestException("Kullanıcı bulunamadı."));

        if (user.isLoginLocked()) {
            throw new BadRequestException("Çok fazla hatalı giriş denemesi yapıldı. Lütfen 15 dakika sonra tekrar deneyin.");
        }

        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            recordFailedLogin(user);
            throw new BadRequestException("Şifre yanlış. Dilerseniz şifrenizi sıfırlayabilirsiniz.");
        }

        user.recordSuccessfulLogin(ip);
        customerUserRepository.save(user);

        return authResponse(user, ip);
    }

    @Transactional
    public CustomerAuthResponse refresh(CustomerRefreshRequest request, String ip) {
        CustomerRefreshToken token = refreshTokenRepository.findByToken(request.refreshToken())
                .orElseThrow(() -> new BadRequestException("Oturum süresi dolmuş. Lütfen tekrar giriş yapın."));

        if (!token.isActive()) {
            throw new BadRequestException("Oturum süresi dolmuş. Lütfen tekrar giriş yapın.");
        }

        token.markUsed();
        refreshTokenRepository.save(token);

        return authResponse(token.getCustomer(), ip);
    }

    @Transactional
    public CustomerPasswordResetResponse logout(CustomerLogoutRequest request) {
        refreshTokenRepository.findByToken(request.refreshToken()).ifPresent(token -> {
            token.revoke();
            refreshTokenRepository.save(token);
        });

        return new CustomerPasswordResetResponse("Çıkış yapıldı.");
    }

    @Transactional
    public CustomerPasswordResetResponse requestPasswordReset(CustomerPasswordResetRequest request) {
        String email = request.email().trim().toLowerCase();
        CustomerUser user = customerUserRepository.findByEmail(email)
                .orElseThrow(() -> new BadRequestException("Kullanıcı bulunamadı."));

        String token = UUID.randomUUID().toString();
        String resetUrl = frontendUrl("/login?resetToken=" + token);
        user.startPasswordReset(token, Instant.now().plus(30, ChronoUnit.MINUTES));
        customerUserRepository.save(user);
        boolean sent = emailNotificationService.passwordResetRequested(user.getEmail(), resetUrl);
        if (!sent) {
            throw new BadRequestException("Şifre sıfırlama maili gönderilemedi. Mail ayarlarını kontrol edin.");
        }

        return new CustomerPasswordResetResponse("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.");
    }

    @Transactional
    public CustomerPasswordResetResponse resetPassword(CustomerPasswordResetConfirmRequest request) {
        CustomerUser user = customerUserRepository.findByPasswordResetToken(request.token())
                .orElseThrow(() -> new BadRequestException("Şifre sıfırlama bağlantısı geçersiz veya süresi dolmuş."));

        Instant expiresAt = user.getPasswordResetExpiresAt();
        if (expiresAt == null || expiresAt.isBefore(Instant.now())) {
            user.startPasswordReset(null, null);
            customerUserRepository.save(user);
            throw new BadRequestException("Şifre sıfırlama bağlantısı geçersiz veya süresi dolmuş.");
        }

        user.changePassword(passwordEncoder.encode(request.password()));
        revokeCustomerRefreshTokens(user);
        customerUserRepository.save(user);

        return new CustomerPasswordResetResponse("Şifren güncellendi. Yeni şifrenle giriş yapabilirsin.");
    }

    @Transactional(readOnly = true)
    public CustomerProfileResponse profile(String email) {
        return CustomerProfileResponse.from(findByEmail(email));
    }

    @Transactional
    public CustomerProfileResponse updateProfile(String email, CustomerProfileRequest request) {
        CustomerUser user = findByEmail(email);
        user.updateProfile(
                request.name().trim(),
                request.phone(),
                request.address(),
                request.city(),
                request.district()
        );

        return CustomerProfileResponse.from(customerUserRepository.save(user));
    }

    @Transactional(readOnly = true)
    public List<CustomerCartItemResponse> cart(String email) {
        return cartItemRepository.findByCustomerEmailOrderByIdAsc(email)
                .stream()
                .map(CustomerCartItemResponse::from)
                .filter(item -> item.quantity() > 0)
                .toList();
    }

    @Transactional
    public List<CustomerCartItemResponse> saveCart(String email, CustomerCartRequest request) {
        CustomerUser user = findByEmail(email);
        cartItemRepository.deleteByCustomerEmail(email);

        if (request.items() != null) {
            for (CustomerCartItemRequest item : request.items()) {
                Product product = productRepository.findById(item.productId())
                        .orElseThrow(() -> new NotFoundException("Sepetteki ürün bulunamadı: " + item.productId()));

                if (product.isActive() && product.getStock() > 0) {
                    cartItemRepository.save(new CustomerCartItem(
                            user,
                            product,
                            Math.min(item.quantity(), product.getStock())
                    ));
                }
            }
        }

        return cart(email);
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> orders(String email) {
        return orderRepository.findByCustomerEmailOrderByCreatedAtDesc(email)
                .stream()
                .map(OrderResponse::from)
                .toList();
    }

    private CustomerAuthResponse authResponse(CustomerUser user, String ip) {
        CustomerRefreshToken refreshToken = refreshTokenRepository.save(new CustomerRefreshToken(
                user,
                UUID.randomUUID().toString(),
                Instant.now().plus(refreshTokenDays, ChronoUnit.DAYS),
                ip
        ));

        return new CustomerAuthResponse(
                jwtService.createToken(user.getEmail(), CUSTOMER_ROLE),
                refreshToken.getToken(),
                CustomerProfileResponse.from(user)
        );
    }

    private void recordFailedLogin(CustomerUser user) {
        Instant lockedUntil = null;
        if (user.getFailedLoginAttempts() + 1 >= MAX_FAILED_LOGIN_ATTEMPTS) {
            lockedUntil = Instant.now().plus(15, ChronoUnit.MINUTES);
        }
        user.recordFailedLogin(lockedUntil);
        customerUserRepository.save(user);
    }

    private void revokeCustomerRefreshTokens(CustomerUser user) {
        List<CustomerRefreshToken> tokens = refreshTokenRepository.findByCustomer(user);
        tokens.forEach(CustomerRefreshToken::revoke);
        refreshTokenRepository.saveAll(tokens);
    }

    private String frontendUrl(String path) {
        String normalizedPath = path.startsWith("/") ? path : "/" + path;
        if (frontendBaseUrl.endsWith("/ecommerce-platform") || normalizedPath.startsWith("/ecommerce-platform")) {
            return frontendBaseUrl + normalizedPath;
        }
        return frontendBaseUrl + "/ecommerce-platform" + normalizedPath;
    }

    private CustomerUser findByEmail(String email) {
        return customerUserRepository.findByEmail(email.trim().toLowerCase())
                .orElseThrow(() -> new BadRequestException("Kullanıcı bulunamadı."));
    }
}
