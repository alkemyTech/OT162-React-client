import rutas from "../config/rutas";
import { Post,Get,Put,Delete } from "./privateApiService";

const getUsers = () =>{
    Get(rutas.GET_USERS_URL)
}

const getUserByID = (ID) => {
    Get(rutas.GET_USERS_URL,ID)
}

const putUsers = (ID,BODY) => {
    Put(rutas.GET_USERS_URL,ID,BODY)
}

const postUsers = (BODY) => {
    Post(rutas.GET_USERS_URL,BODY)
}

const deleteUsers = (ID) => {
    Delete(rutas.GET_USERS_URL,ID)
}

export {getUsers,getUserByID,putUsers,postUsers,deleteUsers}