package com.leadgeneration.service;

import com.leadgeneration.dto.login.AdminLoginDto;

import com.leadgeneration.entity.Admin;

public interface AdminService {



    String login(AdminLoginDto request);

    String forgotPassword(String email);

    String verifyOtp(
            String email,
            String otp
    );

    String resetPassword(
            String email,
            String newPassword,
            String confirmPassword
    );
}

