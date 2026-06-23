package com.leadgeneration.service;

import com.leadgeneration.dto.request.LeadRequestDto;
import com.leadgeneration.entity.Lead;

public interface LeadService {

    Lead saveLead(LeadRequestDto request);
}