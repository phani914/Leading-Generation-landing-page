package com.leadgeneration.service.impl;

import com.leadgeneration.dto.request.TechnologyRequestDto;
import com.leadgeneration.entity.Technology;
import com.leadgeneration.exception.ResourceNotFoundException;
import com.leadgeneration.repository.TechnologyRepository;
import com.leadgeneration.service.TechnologyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnologyServiceImpl
        implements TechnologyService {

    private final TechnologyRepository technologyRepository;

    public TechnologyServiceImpl(
            TechnologyRepository technologyRepository) {
        this.technologyRepository = technologyRepository;
    }

    @Override
    public Technology addTechnology(
            TechnologyRequestDto request) {

        Technology technology = new Technology();

        technology.setTechnologyName(
                request.getTechnologyName());

        technology.setDescription(
                request.getDescription());

        return technologyRepository.save(technology);
    }

    @Override
    public List<Technology> getAllTechnologies() {
        return technologyRepository.findAll();
    }

    @Override
    public Technology getTechnologyById(Long id) {

        return technologyRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Technology Not Found"));
    }

    @Override
    public Technology updateTechnology(
            Long id,
            TechnologyRequestDto request) {

        Technology technology =
                getTechnologyById(id);

        technology.setTechnologyName(
                request.getTechnologyName());

        technology.setDescription(
                request.getDescription());

        return technologyRepository.save(technology);
    }

    @Override
    public void deleteTechnology(Long id) {

        Technology technology =
                getTechnologyById(id);

        technologyRepository.delete(technology);
    }
}