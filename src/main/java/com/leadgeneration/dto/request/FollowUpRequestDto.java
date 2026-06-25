package com.leadgeneration.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class FollowUpRequestDto {


    private String customerName;

    private String note;

    private LocalDate followUpDate;


}
