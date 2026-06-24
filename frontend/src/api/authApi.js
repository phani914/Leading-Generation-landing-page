import api from "./axiosConfig";



export const loginAdmin=(data)=>{


    return api.post(
        "/auth/login",
        data
    );


};