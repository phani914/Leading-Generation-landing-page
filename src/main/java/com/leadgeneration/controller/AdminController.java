package com.leadgeneration.controller;

import com.leadgeneration.dto.ForgotPasswordDto;
import com.leadgeneration.dto.ResetPasswordDto;
import com.leadgeneration.dto.VerifyOtpDto;
import com.leadgeneration.dto.login.AdminLoginDto;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.leadgeneration.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {


    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }



    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody AdminLoginDto request) {

        return ResponseEntity.ok(
                adminService.login(request)
        );
    }
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(
            @RequestBody ForgotPasswordDto request) {


        return ResponseEntity.ok(
                adminService.forgotPassword(
                        request.getEmail()
                )
        );


    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(
            @RequestBody VerifyOtpDto request) {

        return ResponseEntity.ok(
                adminService.verifyOtp(
                        request.getEmail(),
                        request.getOtp()
                )
        );

    }

    @PostMapping("/reset-password/{email}")
    public ResponseEntity<?> resetPassword(
            @PathVariable String email,
            @RequestBody ResetPasswordDto request) {

        return ResponseEntity.ok(
                adminService.resetPassword(
                        email,
                        request.getNewPassword(),
                        request.getConfirmPassword()
                )
        );
    }

}
