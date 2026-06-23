package com.leadgeneration.repository;

import com.leadgeneration.entity.Lead;
import com.leadgeneration.enums.LeadStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeadRepository extends JpaRepository<Lead, Long> {

    List<Lead> findByInterestedTechnology(String technology);

    List<Lead> findByTrainingMode(String trainingMode);

    List<Lead> findByStatus(LeadStatus status);
}