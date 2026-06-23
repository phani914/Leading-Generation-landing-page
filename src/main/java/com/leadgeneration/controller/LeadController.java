package com.leadgeneration.controller;

import com.leadgeneration.dto.request.LeadRequestDTO;
import com.leadgeneration.dto.response.LeadResponseDTO;
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
    public ResponseEntity<LeadResponseDTO> createLead(
            @Valid @RequestBody LeadRequestDTO request) {

        leadService.saveLead(request);

        return ResponseEntity.ok(
                new LeadResponseDTO(
                        "success",
                        "Lead submitted successfully"
                )
        );
    }
}