package com.leadgeneration.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class LeadRequestDto {
    @NotBlank(message = "Full name is required")
    private String fullName;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Mobile number is required")
    private String mobileNumber;

    private String qualification;
    private String interestedTechnology;
    private String trainingMode;
    private String message;

    // getters and setters
}