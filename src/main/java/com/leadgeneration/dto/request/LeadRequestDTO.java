package com.leadgeneration.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LeadRequestDTO {

    @NotBlank(message = "Full Name is required")
    private String fullName;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Mobile Number is required")
    private String mobileNumber;

    private String qualification;
    private String interestedTechnology;
    private String trainingMode;
    private String message;
}