package com.leadgeneration.service.impl;

import com.leadgeneration.dto.login.AdminLoginDto;

import com.leadgeneration.entity.Admin;
import com.leadgeneration.repository.AdminRepository;
import com.leadgeneration.service.AdminService;
import com.leadgeneration.service.EmailService;
import com.leadgeneration.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {


    private final AdminRepository adminRepository;
    private final EmailService emailService;
    private final JwtUtil jwtUtil;


    @Override
    public String login(AdminLoginDto request) {

        Admin admin = adminRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid Email"));

        if (!admin.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return jwtUtil.generateToken(admin.getEmail());
    }

    @Override
    public String forgotPassword(String email) {

        Admin admin = adminRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Email not registered"));

        String otp =
                String.valueOf(
                        100000 + new Random().nextInt(900000)
                );

        admin.setOtp(otp);

        admin.setOtpExpiry(
                LocalDateTime.now().plusMinutes(5)
        );

        adminRepository.save(admin);

        emailService.sendOtpEmail(
                email,
                otp
        );

        return "OTP sent successfully";
    }

    @Override
    public String verifyOtp(
            String email,
            String otp) {

        Admin admin = adminRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Email not found"));

        if (!admin.getOtp().equals(otp)) {
            throw new RuntimeException("Invalid OTP");
        }

        if (admin.getOtpExpiry()
                .isBefore(LocalDateTime.now())) {

            throw new RuntimeException("OTP Expired");
        }

        return "OTP Verified Successfully";
    }

    @Override
    public String resetPassword(
            String email,
            String newPassword,
            String confirmPassword) {

        Admin admin = adminRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Email not found"));

        if (!newPassword.equals(confirmPassword)) {

            throw new RuntimeException(
                    "Passwords do not match"
            );
        }

        admin.setPassword(newPassword);

        admin.setOtp(null);
        admin.setOtpExpiry(null);

        adminRepository.save(admin);

        return "Password reset successfully";
    }


}
