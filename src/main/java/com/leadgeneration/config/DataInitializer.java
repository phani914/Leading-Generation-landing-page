package com.leadgeneration.config;

import com.leadgeneration.entity.Admin;
import com.leadgeneration.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final AdminRepository adminRepository;

    @Bean
    public CommandLineRunner initAdmin() {

        return args -> {

            if (adminRepository.findByEmail("admin@gmail.com").isEmpty()) {

                Admin admin = new Admin();

                admin.setEmail("admin@gmail.com");
                admin.setPassword("Admin@123");

                adminRepository.save(admin);

                System.out.println("✅ Admin Created Successfully");
            }
        };
    }
}