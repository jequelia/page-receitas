import http from "./httpService";


export const getAll = () =>{
    return http.get("/videos");
}




