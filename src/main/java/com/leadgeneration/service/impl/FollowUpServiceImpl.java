package com.leadgeneration.service.impl;

import com.leadgeneration.dto.request.FollowUpRequestDto;
import com.leadgeneration.entity.FollowUp;
import com.leadgeneration.repository.FollowUpRepository;
import com.leadgeneration.service.FollowUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FollowUpServiceImpl
        implements FollowUpService {

    private final FollowUpRepository followUpRepository;

    @Override
    public FollowUp saveFollowUp(
            FollowUpRequestDto request) {

        FollowUp followUp =
                new FollowUp();

        followUp.setCustomerName(
                request.getCustomerName());

        followUp.setNote(
                request.getNote());

        followUp.setFollowUpDate(
                request.getFollowUpDate());

        return followUpRepository.save(
                followUp);
    }

    @Override
    public List<FollowUp> getAllFollowUps() {

        return followUpRepository.findAll();
    }
}
