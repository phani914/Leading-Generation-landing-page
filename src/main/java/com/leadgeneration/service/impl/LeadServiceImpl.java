package com.leadgeneration.service.impl;

import com.leadgeneration.dto.request.LeadRequestDto;
import com.leadgeneration.entity.Lead;
import com.leadgeneration.repository.LeadRepository;
import com.leadgeneration.service.LeadService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class LeadServiceImpl implements LeadService {

    private final LeadRepository leadRepository;

    public LeadServiceImpl(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    @Override
    public Lead saveLead(LeadRequestDto request) {

        Lead lead = new Lead();

        lead.setFullName(request.getFullName());
        lead.setEmail(request.getEmail());
        lead.setMobileNumber(request.getMobileNumber());
        lead.setQualification(request.getQualification());
        lead.setInterestedTechnology(request.getInterestedTechnology());
        lead.setTrainingMode(request.getTrainingMode());
        lead.setMessage(request.getMessage());

        lead.setSource("Landing Page");
        lead.setCreatedAt(LocalDateTime.now());

        return leadRepository.save(lead);
    }
}