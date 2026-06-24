package com.leadgeneration.service;

import com.leadgeneration.dto.request.TechnologyRequestDto;
import com.leadgeneration.entity.Technology;

import java.util.List;

public interface TechnologyService {

    Technology addTechnology(
            TechnologyRequestDto request);

    List<Technology> getAllTechnologies();

    Technology getTechnologyById(Long id);

    Technology updateTechnology(
            Long id,
            TechnologyRequestDto request);

    void deleteTechnology(Long id);
}