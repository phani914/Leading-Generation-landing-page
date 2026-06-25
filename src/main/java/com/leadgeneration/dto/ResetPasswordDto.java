package com.leadgeneration.dto;

import lombok.Data;

@Data
public class ResetPasswordDto {

    private String newPassword;
    private String confirmPassword;
}


