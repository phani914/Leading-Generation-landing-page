package com.leadgeneration.repository;

import com.leadgeneration.entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeadRepository extends JpaRepository<Lead, Long> {

    List<Lead> findByInterestedTechnology(String technology);

    List<Lead> findByTrainingMode(String trainingMode);
}