package com.tanerworks.ecommerce.customer;

import java.util.List;

import com.tanerworks.ecommerce.auth.JwtService;
import com.tanerworks.ecommerce.auth.LoginRequest;
import com.tanerworks.ecommerce.common.BadRequestException;
import com.tanerworks.ecommerce.common.NotFoundException;
import com.tanerworks.ecommerce.order.OrderRepository;
import com.tanerworks.ecommerce.order.OrderResponse;
import com.tanerworks.ecommerce.product.Product;
import com.tanerworks.ecommerce.product.ProductRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomerService {

    private static final String CUSTOMER_ROLE = "CUSTOMER";

    private final CustomerUserRepository customerUserRepository;
    private final CustomerCartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public CustomerService(
            CustomerUserRepository customerUserRepository,
            CustomerCartItemRepository cartItemRepository,
            ProductRepository productRepository,
            OrderRepository orderRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.customerUserRepository = customerUserRepository;
        this.cartItemRepository = cartItemRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @Transactional
    public CustomerAuthResponse register(CustomerRegisterRequest request) {
        String email = request.email().trim().toLowerCase();

        if (customerUserRepository.existsByEmail(email)) {
            throw new BadRequestException("Bu e-posta ile kayıtlı bir hesap var.");
        }

        CustomerUser user = customerUserRepository.save(new CustomerUser(
                email,
                passwordEncoder.encode(request.password()),
                request.name().trim()
        ));

        return authResponse(user);
    }

    @Transactional(readOnly = true)
    public CustomerAuthResponse login(LoginRequest request) {
        CustomerUser user = findByEmail(request.email());

        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new BadRequestException("E-posta veya şifre hatalı.");
        }

        return authResponse(user);
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

    private CustomerAuthResponse authResponse(CustomerUser user) {
        return new CustomerAuthResponse(
                jwtService.createToken(user.getEmail(), CUSTOMER_ROLE),
                CustomerProfileResponse.from(user)
        );
    }

    private CustomerUser findByEmail(String email) {
        return customerUserRepository.findByEmail(email.trim().toLowerCase())
                .orElseThrow(() -> new BadRequestException("E-posta veya şifre hatalı."));
    }
}
