import axios from "axios";
import { GetAuth } from "./privateApiService";

const baseContactURL = "https://ongapi.alkemy.org/api/contacts";
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: GetAuth(),
  },
};

const getContacts = () => axios.get(`${baseContactURL}`, config);

const getContactById = (id) => axios.get(`${baseContactURL}/${id}`, config);

const addNewContact = (contact) =>
  axios.post(`${baseContactURL}`, contact, config);

const updateContact = (id, newData) =>
  axios.put(`${baseContactURL}/${id}`, newData, config);

const deleteContact = (id) => axios.delete(`${baseContactURL}/${id}`, config);

export {
  getContacts,
  getContactById,
  addNewContact,
  updateContact,
  deleteContact,
};
