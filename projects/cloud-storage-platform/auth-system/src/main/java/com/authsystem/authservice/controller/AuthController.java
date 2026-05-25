package com.authsystem.authservice.controller;

import com.authsystem.authservice.dto.*;
import com.authsystem.authservice.entity.User;
import com.authsystem.authservice.exception.TooManyRequestsException;
import com.authsystem.authservice.security.RateLimitService;
import com.authsystem.authservice.service.AuthService;
import com.authsystem.authservice.service.RefreshTokenService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final RateLimitService rateLimitService;

    @Value("${app.demo.read-only:false}")
    private boolean demoReadOnly;

    public AuthController(AuthService authService, 
                          RefreshTokenService refreshTokenService, 
                          RateLimitService rateLimitService) {
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
        this.rateLimitService = rateLimitService;
    }

    private void checkRateLimit(HttpServletRequest request, String actionType) {
        String ip = request.getRemoteAddr();
        if (!rateLimitService.resolveBucket(ip, actionType).tryConsume(1)) {
            log.warn("ST_LOG | TYPE:RATE_LIMIT_EXCEEDED | ACTION:{} | IP:{}", actionType, ip);
            throw new TooManyRequestsException(actionType + " işlemi için çok fazla istek gönderildi.");
        }
    }

    private boolean isDemoLoginRequest(LoginRequest request) {
        if (!demoReadOnly || request == null || request.getUsernameOrEmail() == null) {
            return false;
        }

        return switch (request.getUsernameOrEmail().trim()) {
            case "demo.user", "demo.user@ntworks.local",
                 "demo.moderator", "demo.moderator@ntworks.local",
                 "demo.admin", "demo.admin@ntworks.local" -> true;
            default -> false;
        };
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest request, HttpServletRequest httpRequest) {
        rejectDemoMutation();
        checkRateLimit(httpRequest, "REGISTER");
        String result = authService.register(request, httpRequest.getRemoteAddr());
        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request, HttpServletRequest httpRequest) {
        if (!isDemoLoginRequest(request)) {
            checkRateLimit(httpRequest, "LOGIN");
        }
        Object result = authService.login(request, httpRequest.getRemoteAddr(), httpRequest);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestBody LogoutRequest request, HttpServletRequest httpRequest) {
        checkRateLimit(httpRequest, "DEFAULT");
        authService.logout(request.getRefreshToken(), httpRequest.getRemoteAddr());
        return ResponseEntity.ok("Oturum kapatıldı");
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@Valid @RequestBody ForgetPasswordRequest request, HttpServletRequest httpRequest) {
        rejectDemoMutation();
        checkRateLimit(httpRequest, "FORGOT_PASSWORD");
        String result = authService.forgotPassword(request.getEmail(), httpRequest.getRemoteAddr());
        return ResponseEntity.ok(result);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest request, HttpServletRequest httpRequest) {
        rejectDemoMutation();
        checkRateLimit(httpRequest, "RESET_PASSWORD");
        String result = authService.resetPassword(request.getToken(), request.getNewPassword(), httpRequest.getRemoteAddr());
        return ResponseEntity.ok(result);
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyUser(@RequestParam String token, HttpServletRequest httpRequest) {
        rejectDemoMutation();
        checkRateLimit(httpRequest, "VERIFY");
        String result = authService.verifyUser(token, httpRequest.getRemoteAddr());
        return ResponseEntity.ok(result);
    }

    @PostMapping("/refresh")
    public ResponseEntity<RefreshResponse> refresh(@RequestBody RefreshRequest request, HttpServletRequest httpRequest) {
        checkRateLimit(httpRequest, "REFRESH");
        RefreshResponse response = refreshTokenService.refreshTokenRotate(request.getRefreshToken(), httpRequest.getRemoteAddr(), httpRequest);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/me")
    public ResponseEntity<Map<String, Object>> getCurrentUser() {
        String username = org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authService.getUserProfile(username);
        return ResponseEntity.ok(Map.of(
                "id", user.getId(),
                "username", user.getUsername(),
                "email", user.getEmail(),
                "role", user.getRole().name(),
                "enabled", user.isEnabled()
        ));
    }

    private void rejectDemoMutation() {
        if (demoReadOnly) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Demo mode uses fixed accounts and is read-only.");
        }
    }
}
