package com.authsystem.authservice.config;

import com.authsystem.authservice.entity.User;
import com.authsystem.authservice.enums.Role;
import com.authsystem.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DemoAccountInitializer implements ApplicationRunner {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Value("${app.demo-data.enabled:false}")
    private boolean demoDataEnabled;

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        if (!demoDataEnabled) {
            return;
        }

        List<DemoAccount> accounts = List.of(
                new DemoAccount("demo.user", "demo.user@ntworks.local", "Demo12345!", Role.ROLE_USER),
                new DemoAccount("demo.moderator", "demo.moderator@ntworks.local", "Demo12345!", Role.ROLE_MODERATOR),
                new DemoAccount("demo.admin", "demo.admin@ntworks.local", "Demo12345!", Role.ROLE_ADMIN)
        );

        accounts.forEach(this::upsertAccount);
    }

    private void upsertAccount(DemoAccount account) {
        User user = userRepository.findByUsername(account.username()).orElseGet(User::new);
        user.setUsername(account.username());
        user.setEmail(account.email());
        user.setPassword(passwordEncoder.encode(account.password()));
        user.setRole(account.role());
        user.setEnabled(true);
        user.setDeleted(false);
        user.setFailedLoginAttempts(0);
        user.setLockTime(null);
        user.setSuspensionEndTime(null);
        user.setVerificationToken(null);
        user.setVerificationTokenExpiry(null);
        if (user.getCreatedAt() == null) {
            user.setCreatedAt(LocalDateTime.now());
        }
        userRepository.save(user);
    }

    private record DemoAccount(String username, String email, String password, Role role) {
    }
}
