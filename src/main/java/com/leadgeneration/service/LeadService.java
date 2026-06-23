package com.leadgeneration.service;

import com.leadgeneration.dto.request.LeadRequestDto;
import com.leadgeneration.dto.request.LeadRequestDto;
import com.leadgeneration.entity.Lead;
import jakarta.validation.Valid;

import java.util.List;

public interface LeadService {

    Lead saveLead(@Valid LeadRequestDto request);

    List<Lead> getAllLeads();

    List<Lead> getLeadsByTechnology(String technology);
}