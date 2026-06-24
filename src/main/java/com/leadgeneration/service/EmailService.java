package com.leadgeneration.service;


import com.leadgeneration.entity.Lead;

public interface EmailService {


    void sendUserConfirmationEmail(Lead lead);

    void sendAdminNotificationEmail(
            Lead lead
    );

    void sendOtpEmail(
            String email,
            String otp);
}