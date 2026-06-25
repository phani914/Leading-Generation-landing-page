package com.leadgeneration.service;

import com.leadgeneration.entity.EmailTemplate;

import java.util.List;

public interface EmailTemplateService {

    EmailTemplate createTemplate(
            EmailTemplate template);

    List<EmailTemplate> getAllTemplates();

    EmailTemplate getTemplateById(Long id);

    EmailTemplate updateTemplate(
            Long id,
            EmailTemplate template);

    void deleteTemplate(Long id);
}
