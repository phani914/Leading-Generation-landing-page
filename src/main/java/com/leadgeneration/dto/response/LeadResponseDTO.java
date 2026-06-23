package com.leadgeneration.dto.response;

public class LeadResponseDTO {

    private String status;
    private String message;

    public LeadResponseDTO() {
    }

    public LeadResponseDTO(String status, String message) {
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