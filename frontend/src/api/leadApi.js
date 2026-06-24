import api from "./axiosConfig";



export const getLeads=()=>{

    return api.get("/leads");

};



export const createLead=(data)=>{

    return api.post(
        "/leads",
        data
    );

};



export const updateLead=(id,data)=>{


    return api.put(
        `/leads/${id}`,
        data
    );

};



export const deleteLead=(id)=>{


    return api.delete(
        `/leads/${id}`
    );

};