package com.leadgeneration.controller;

import com.leadgeneration.dto.request.FollowUpRequestDto;
import com.leadgeneration.entity.FollowUp;
import com.leadgeneration.service.FollowUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/followups")
@RequiredArgsConstructor
public class FollowUpController {

    private final FollowUpService followUpService;

    @PostMapping
    public ResponseEntity<FollowUp> saveFollowUp(
            @RequestBody FollowUpRequestDto request) {

        return ResponseEntity.ok(
                followUpService.saveFollowUp(
                        request));
    }

    @GetMapping
    public ResponseEntity<List<FollowUp>>
    getAllFollowUps() {

        return ResponseEntity.ok(
                followUpService.getAllFollowUps());
    }
}
