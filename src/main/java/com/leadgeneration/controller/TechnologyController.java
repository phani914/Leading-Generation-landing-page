package com.leadgeneration.controller;

import com.leadgeneration.dto.request.TechnologyRequestDto;
import com.leadgeneration.entity.Technology;
import com.leadgeneration.service.TechnologyService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/technologies")
@CrossOrigin("*")
public class TechnologyController {

    private final TechnologyService technologyService;

    public TechnologyController(
            TechnologyService technologyService) {

        this.technologyService = technologyService;
    }

    @PostMapping
    public ResponseEntity<Technology> addTechnology(
            @Valid @RequestBody TechnologyRequestDto request) {

        return ResponseEntity.ok(
                technologyService.addTechnology(request));
    }

    @GetMapping
    public ResponseEntity<List<Technology>>
    getAllTechnologies() {

        return ResponseEntity.ok(
                technologyService.getAllTechnologies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Technology>
    getTechnologyById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                technologyService.getTechnologyById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Technology>
    updateTechnology(
            @PathVariable Long id,
            @RequestBody TechnologyRequestDto request) {

        return ResponseEntity.ok(
                technologyService.updateTechnology(
                        id,
                        request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String>
    deleteTechnology(
            @PathVariable Long id) {

        technologyService.deleteTechnology(id);

        return ResponseEntity.ok(
                "Technology Deleted Successfully");
    }
}