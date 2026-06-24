package com.leadgeneration.util;

import com.leadgeneration.entity.Lead;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.io.PrintWriter;
import java.util.List;


@Component
public class CsvExportUtil {

    public void exportLeads(
            List<Lead> leads,
            HttpServletResponse response) {

        try {
            response.setContentType(
                    "text/csv"
            );
            response.setHeader(
                    "Content-Disposition",
                    "attachment; filename=leads.csv"
            );
            PrintWriter writer =
                    response.getWriter();
            writer.println(
                    "LeadId,Name,Email,Mobile,Qualification,Technology,TrainingMode,Status,CreatedAt"
            );
            for(Lead lead : leads){

                writer.println(

                        lead.getLeadId()+","+
                                lead.getFullName()+","+
                                lead.getEmail()+","+
                                lead.getMobileNumber()+","+
                                lead.getQualification()+","+
                                lead.getInterestedTechnology()+","+
                                lead.getTrainingMode()+","+
                                lead.getStatus()+","+
                                lead.getCreatedAt()

                );
            }
            writer.flush();
        }catch(Exception e){

            throw new RuntimeException(
                    "CSV export failed"
            );
        }
    }
}