import api from "./axiosConfig";



export const getMentors=()=>{

    return api.get("/mentors");

};



export const createMentor=(data)=>{

    return api.post(
        "/mentors",
        data
    );

};



export const updateMentor=(id,data)=>{


    return api.put(
        `/mentors/${id}`,
        data
    );

};



export const deleteMentor=(id)=>{


    return api.delete(
        `/mentors/${id}`
    );

};