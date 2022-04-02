import rutas from "../config/rutas";
import { Post,Get,Put,Delete } from "./privateApiService";

const getUsers = () =>{
    Get(rutas.GET_USERS_URL)
}

const getUserByID = (id) => {
    Get(rutas.GET_USERS_URL,id)
}

const putUsers = (id,body) => {
    Put(rutas.GET_USERS_URL,id,body)
}

const postUsers = (body) => {
    Post(rutas.GET_USERS_URL,body)
}

const deleteUsers = (id) => {
    Delete(rutas.GET_USERS_URL,id)
}

export {getUsers,getUserByID,putUsers,postUsers,deleteUsers}