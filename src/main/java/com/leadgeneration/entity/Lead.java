package com.leadgeneration.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "leads")
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leadId;

    private String fullName;
    private String email;
    private String mobileNumber;
    private String qualification;
    private String interestedTechnology;
    private String trainingMode;
    private String message;
    private String source;
    private LocalDateTime createdAt;

    // Getters and Setters
}

