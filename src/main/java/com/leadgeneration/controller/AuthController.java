package com.leadgeneration.controller;

import com.leadgeneration.dto.login.AdminLoginDto;
import com.leadgeneration.dto.register.AdminRegisterDto;
import com.leadgeneration.entity.Admin;
import com.leadgeneration.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {


    private final AdminService adminService;

    @PostMapping("/register")
    public ResponseEntity<Admin> register(
            @RequestBody AdminRegisterDto request) {

        return ResponseEntity.ok(
                adminService.register(request)
        );
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody AdminLoginDto request) {

        String token = adminService.login(request);

        return ResponseEntity.ok(
                new AuthResponse(token)
        );
    }

    static class AuthResponse {

        private String token;

        public AuthResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }


}
