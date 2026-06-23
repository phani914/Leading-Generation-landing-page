package com.leadgeneration.controller;

import com.leadgeneration.dto.request.LeadRequestDto;
import com.leadgeneration.dto.response.LeadResponseDto;
import com.leadgeneration.service.LeadService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin("*")
public class LeadController {

    private final LeadService leadService;

    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    @PostMapping
    public ResponseEntity<LeadResponseDto> createLead(
            @Valid @RequestBody LeadRequestDto request) {

        leadService.saveLead(request);

        return ResponseEntity.ok(
                new LeadResponseDto(
                        "success",
                        "Lead submitted successfully"
                )
        );
    }
}