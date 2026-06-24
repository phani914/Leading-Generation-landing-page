package com.leadgeneration.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class TechnologyRequestDto {

    @NotBlank
    private String technologyName;

    private String description;
}