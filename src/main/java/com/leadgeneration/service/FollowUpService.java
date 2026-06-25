package com.leadgeneration.service;

import com.leadgeneration.dto.request.FollowUpRequestDto;
import com.leadgeneration.entity.FollowUp;

import java.util.List;

public interface FollowUpService {

    FollowUp saveFollowUp(
            FollowUpRequestDto request);

    List<FollowUp> getAllFollowUps();
}