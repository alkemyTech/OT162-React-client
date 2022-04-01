import rutas from "../config/rutas";
import { Delete, Get, Post, Put } from "./privateApiService";


const getMembers = ()=> Get(rutas.MEMBERS_URL);

const getMemberById = (id)=> Get(rutas.MEMBERS_URL, id);

const addNewMember = (member)=> Post(rutas.MEMBERS_URL, member)

const updateMember = (id, newData)=> Put(rutas.MEMBERS_URL, id, newData)

const deleteMember = (id)=> Delete(rutas.MEMBERS_URL,id)

export {
    getMembers,
    getMemberById,
    addNewMember,
    updateMember,
    deleteMember,
}