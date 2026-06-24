package com.leadgeneration.controller;

import com.leadgeneration.entity.Lead;
import com.leadgeneration.service.LeadService;
import com.leadgeneration.util.CsvExportUtil;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/leads")
public class AdminLeadController {


    private final LeadService leadService;
    private final CsvExportUtil csvExportUtil;


    public AdminLeadController(
            LeadService leadService,
            CsvExportUtil csvExportUtil) {

        this.leadService = leadService;
        this.csvExportUtil = csvExportUtil;

    }


    @GetMapping
    public ResponseEntity<List<Lead>> getAllLeads(){

        return ResponseEntity.ok(
                leadService.getAllLeads()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<Lead> getLeadById(
            @PathVariable Long id){

        return ResponseEntity.ok(
                leadService.getLeadById(id)
        );
    }


    @GetMapping("/technology/{technology}")
    public ResponseEntity<List<Lead>> getLeadsByTechnology(
            @PathVariable String technology){

        return ResponseEntity.ok(
                leadService.getLeadsByTechnology(
                        technology
                )
        );
    }

    @GetMapping("/export")
    public void exportLeads(
            HttpServletResponse response){

        List<Lead> leads =
                leadService.getAllLeads();


        csvExportUtil.exportLeads(
                leads,
                response
        );
    }
}