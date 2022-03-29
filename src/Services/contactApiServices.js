import { Delete, Get, Post, Put } from "./privateApiService";
import rutas from "../config/rutas";

const getContacts = () => Get(rutas.CONTACTS_URL);

const getContactById = (id) => Get(rutas.CONTACTS_URL, id);

const addNewContact = (contact) => Post(rutas.CONTACTS_URL, contact);

const updateContact = (id, newData) => Put(rutas.CONTACTS_URL, id, newData);

const deleteContact = (id) => Delete(rutas.CONTACTS_URL, id);

export {
  getContacts,
  getContactById,
  addNewContact,
  updateContact,
  deleteContact,
};
