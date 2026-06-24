package com.leadgeneration.entity;
import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "admins")
@Data
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String email;

    private String password;

    private String otp;

    private LocalDateTime otpExpiry;

}