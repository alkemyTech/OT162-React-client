import { Delete, Get, Post, Put } from "./privateApiService";

const memebersRoute = `${process.env.REACT_APP_URL_BASE}${process.env.REACT_APP_MEMBERS}`;

const getMembers = () => Get(memebersRoute);

const getMemberById = (id) => Get(memebersRoute, id);

const addNewMember = (member) => Post(memebersRoute, member);

const updateMember = (id, newData) => Put(memebersRoute, id, newData);

const deleteMember = (id) => Delete(memebersRoute, id);

export { getMembers, getMemberById, addNewMember, updateMember, deleteMember };
