package com.leadgeneration.service.impl;

import com.leadgeneration.dto.request.LeadRequestDto;
import com.leadgeneration.entity.Lead;
import com.leadgeneration.enums.LeadStatus;
import com.leadgeneration.exception.ResourceNotFoundException;
import com.leadgeneration.repository.LeadRepository;
import com.leadgeneration.service.EmailService;
import com.leadgeneration.service.LeadService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class LeadServiceImpl implements LeadService {


    private final LeadRepository leadRepository;
    private final EmailService emailService;

    @Override
    public Lead saveLead(@Valid LeadRequestDto request) {

        Lead lead = Lead.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .mobileNumber(request.getMobileNumber())
                .qualification(request.getQualification())
                .interestedTechnology(request.getInterestedTechnology())
                .trainingMode(request.getTrainingMode())
                .message(request.getMessage())
                .status(LeadStatus.NEW)
                .createdAt(LocalDateTime.now())
                .build();

        Lead savedLead = leadRepository.save(lead);

        log.info("Lead created successfully with id {}", savedLead.getLeadId());

        try {
            emailService.sendUserConfirmationEmail(savedLead);
            emailService.sendAdminNotificationEmail(savedLead);

        } catch (Exception e) {
            log.error("Email sending failed", e);
        }

        return savedLead;
    }

    @Override
    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    @Override
    public Lead getLeadById(Long id) {
        return leadRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Lead not found with id : " + id
                        )
                );
    }

    @Override
    public List<Lead> getLeadsByTechnology(String technology) {
        return leadRepository.findByInterestedTechnology(technology);
    }

    @Override
    public List<Lead> getLeadsByStatus(LeadStatus status) {
        return leadRepository.findByStatus(status);
    }

    @Override
    public Lead updateLeadStatus(Long id, LeadStatus status) {

        Lead lead = leadRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Lead not found with id : " + id
                        )
                );

        lead.setStatus(status);

        return leadRepository.save(lead);
    }

    @Override
    public List<Lead> getLeadsByTrainingMode(String mode) {
        return leadRepository.findByTrainingMode(mode);
    }

    @Override
    public void deleteLead(Long id) {

        Lead lead = leadRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Lead not found with id : " + id
                        )
                );

        leadRepository.delete(lead);
    }


}
