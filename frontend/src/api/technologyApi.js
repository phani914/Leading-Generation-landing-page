import api from "./axiosConfig";



export const getTechnologies=()=>{

    return api.get("/technologies");

};



export const createTechnology=(data)=>{

    return api.post(
        "/technologies",
        data
    );

};



export const updateTechnology=(id,data)=>{


    return api.put(
        `/technologies/${id}`,
        data
    );

};



export const deleteTechnology=(id)=>{


    return api.delete(
        `/technologies/${id}`
    );

};