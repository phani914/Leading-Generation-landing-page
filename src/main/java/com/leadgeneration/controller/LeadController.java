package com.leadgeneration.controller;

import com.leadgeneration.dto.request.LeadRequestDto;
import com.leadgeneration.dto.response.LeadResponseDto;
import com.leadgeneration.entity.Lead;
import com.leadgeneration.service.LeadService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.leadgeneration.enums.LeadStatus;

import java.util.List;

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

    @GetMapping
    public ResponseEntity<List<Lead>> getAllLeads() {

        return ResponseEntity.ok(
                leadService.getAllLeads()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lead> getLeadById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                leadService.getLeadById(id)
        );
    }

    @GetMapping("/technology/{technology}")
    public ResponseEntity<List<Lead>> getLeadsByTechnology(
            @PathVariable String technology) {

        return ResponseEntity.ok(
                leadService.getLeadsByTechnology(technology)
        );
    }
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Lead>> getLeadsByStatus(
            @PathVariable LeadStatus status) {

        return ResponseEntity.ok(
                leadService.getLeadsByStatus(status)
        );
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Lead> updateLeadStatus(
            @PathVariable Long id,
            @RequestParam LeadStatus status) {

        return ResponseEntity.ok(
                leadService.updateLeadStatus(id, status)
        );
    }
    @GetMapping("/training-mode/{mode}")
    public ResponseEntity<List<Lead>> getLeadsByTrainingMode(
            @PathVariable String mode) {

        return ResponseEntity.ok(
                leadService.getLeadsByTrainingMode(mode)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteLead(
            @PathVariable Long id) {

        leadService.deleteLead(id);

        return ResponseEntity.ok("Lead Deleted Successfully");
    }
}