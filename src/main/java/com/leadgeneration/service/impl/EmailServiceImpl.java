package com.leadgeneration.service.impl;

import com.leadgeneration.entity.Lead;
import com.leadgeneration.service.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    @Value("${admin.email}")
    private String adminEmail;

    @Override
    public void sendUserConfirmationEmail(Lead lead) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(lead.getEmail());
        message.setSubject("Registration Successful - Training Program");

        message.setText("""
                Hello %s,

                Thank you for registering for our Project Training Program.

                We have received your enquiry.

                Our team will contact you soon.

                Regards,
                Training Team
                """.formatted(
                lead.getFullName()
        ));

        send(message);
    }

    @Override
    public void sendAdminNotificationEmail(Lead lead) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(adminEmail);
        message.setSubject("New Lead Generated");

        message.setText("""
                New Lead Details

                Name: %s
                Email: %s
                Mobile: %s
                Qualification: %s
                Technology: %s
                Training Mode: %s
                Message: %s
                """.formatted(
                lead.getFullName(),
                lead.getEmail(),
                lead.getMobileNumber(),
                lead.getQualification(),
                lead.getInterestedTechnology(),
                lead.getTrainingMode(),
                lead.getMessage()
        ));

        send(message);
    }
    @Override
    public void sendOtpEmail(
            String email,
            String otp) {


        SimpleMailMessage message =
                new SimpleMailMessage();

        message.setTo(email);

        message.setSubject(
                "Password Reset OTP"
        );

        message.setText("""
        Hello,

        Your OTP for password reset is: %s

        This OTP is valid for 5 minutes.

        Regards,
        Lead Generation Team
        """.formatted(otp));

        send(message);


    }


    private void send(SimpleMailMessage message) {

        try {

            mailSender.send(message);

            log.info(
                    "Email sent successfully to {}",
                    message.getTo()
            );

        } catch (Exception e) {

            log.error(
                    "Email sending failed to {}",
                    message.getTo(),
                    e
            );
        }
    }
}