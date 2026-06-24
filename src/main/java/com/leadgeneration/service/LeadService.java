package com.leadgeneration.service;

import com.leadgeneration.dto.request.LeadRequestDto;
import com.leadgeneration.entity.Lead;
import com.leadgeneration.enums.LeadStatus;

import java.util.List;

public interface LeadService {

    Lead saveLead(LeadRequestDto request);

    List<Lead> getAllLeads();

    Lead getLeadById(Long id);

    List<Lead> getLeadsByTechnology(String technology);

    List<Lead> getLeadsByStatus(LeadStatus status);

    Lead updateLeadStatus(Long id, LeadStatus status);

    List<Lead> getLeadsByTrainingMode(String mode);

    void deleteLead(Long id);
}