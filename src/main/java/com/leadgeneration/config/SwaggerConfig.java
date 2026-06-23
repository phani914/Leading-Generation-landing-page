package com.leadgeneration.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {

        return new OpenAPI()
                .info(
                        new Info()
                                .title("Lead Generation Platform API")
                                .version("v1.0.0")
                                .description(
                                        "REST APIs for Project Training Program Lead Generation Platform. "
                                                + "Provides lead submission,lead management,CSV export,email notifications,and admin operations."
                                )
                                .contact(
                                        new Contact()
                                                .name("Microinfoweb Private Limited")
                                                .email("contact@mail.miweb.co.in")
                                                .url("https://www.miweb.co.in")
                                )
                                .license(
                                        new License()
                                                .name("Microinfoweb Proprietary License")
                                )
                );


    }
}