import http from "./httpService";


export const getAll = () =>{
    return http.get("/receitas");
}

export const create = (data) =>{
    return http.post("/receitas", data);
}

export const update =(id, data)=>{
    return http.put(`/receitas/${id}`, data);
}

export const delet = (id) =>{
    return http.delete(`/receitas/${id}`);
}



