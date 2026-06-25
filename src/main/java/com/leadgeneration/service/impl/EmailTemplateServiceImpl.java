package com.leadgeneration.service.impl;

import com.leadgeneration.entity.EmailTemplate;
import com.leadgeneration.repository.EmailTemplateRepository;
import com.leadgeneration.service.EmailTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmailTemplateServiceImpl
        implements EmailTemplateService {

    private final EmailTemplateRepository repository;

    @Override
    public EmailTemplate createTemplate(
            EmailTemplate template) {

        return repository.save(template);
    }

    @Override
    public List<EmailTemplate> getAllTemplates() {

        return repository.findAll();
    }

    @Override
    public EmailTemplate getTemplateById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Template Not Found"));
    }

    @Override
    public EmailTemplate updateTemplate(
            Long id,
            EmailTemplate template) {

        EmailTemplate existing =
                repository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Template Not Found"));

        existing.setTemplateTitle(
                template.getTemplateTitle());

        existing.setSubject(
                template.getSubject());

        existing.setMessage(
                template.getMessage());

        return repository.save(existing);
    }

    @Override
    public void deleteTemplate(Long id) {

        repository.deleteById(id);
    }
}
