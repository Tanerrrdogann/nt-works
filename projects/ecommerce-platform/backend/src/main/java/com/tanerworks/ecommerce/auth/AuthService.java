package com.tanerworks.ecommerce.auth;

import com.tanerworks.ecommerce.common.BadRequestException;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final AdminUserRepository adminUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            AdminUserRepository adminUserRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.adminUserRepository = adminUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public LoginResponse login(LoginRequest request) {
        AdminUser adminUser = adminUserRepository.findByEmail(request.email())
                .orElseThrow(() -> new BadRequestException("E-posta veya şifre hatalı."));

        if (!passwordEncoder.matches(request.password(), adminUser.getPasswordHash())) {
            throw new BadRequestException("E-posta veya şifre hatalı.");
        }

        return new LoginResponse(
                jwtService.createToken(adminUser),
                adminUser.getEmail(),
                adminUser.getRole().name()
        );
    }
}
