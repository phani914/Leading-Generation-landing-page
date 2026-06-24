package com.leadgeneration.dto.response;

public class LeadResponseDto {

    private String status;
    private String message;

    public LeadResponseDto() {
    }

    public LeadResponseDto(String status, String message) {
        this.status = status;
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}