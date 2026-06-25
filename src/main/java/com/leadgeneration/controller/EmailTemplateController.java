package com.leadgeneration.controller;

import com.leadgeneration.entity.EmailTemplate;
import com.leadgeneration.service.EmailTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/email-templates")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmailTemplateController {

    private final EmailTemplateService service;

    @PostMapping
    public ResponseEntity<EmailTemplate>
    createTemplate(
            @RequestBody EmailTemplate template) {

        return ResponseEntity.ok(
                service.createTemplate(template));
    }

    @GetMapping
    public ResponseEntity<List<EmailTemplate>>
    getAllTemplates() {

        return ResponseEntity.ok(
                service.getAllTemplates());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmailTemplate>
    getTemplateById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                service.getTemplateById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmailTemplate>
    updateTemplate(
            @PathVariable Long id,
            @RequestBody EmailTemplate template) {

        return ResponseEntity.ok(
                service.updateTemplate(
                        id,
                        template));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String>
    deleteTemplate(
            @PathVariable Long id) {

        service.deleteTemplate(id);

        return ResponseEntity.ok(
                "Template Deleted Successfully");
    }
}