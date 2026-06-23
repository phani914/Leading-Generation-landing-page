package com.leadgeneration.service;

import com.leadgeneration.dto.request.LeadRequestDTO;
import com.leadgeneration.entity.Lead;

import java.util.List;

public interface LeadService {

    Lead saveLead(LeadRequestDTO request);

    List<Lead> getAllLeads();

    List<Lead> getLeadsByTechnology(String technology);
}