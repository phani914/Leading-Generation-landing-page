package com.leadgeneration.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "follow_ups")
@Data
public class FollowUp {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;

    private String note;

    private LocalDate followUpDate;


}
