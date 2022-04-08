import { Delete, Get, Post, Put } from "./privateApiService";

const contactURL = `${process.env.REACT_APP_API_URL_BASE}${process.env.REACT_APP_CONTACTS_ROUTE}`;

const getContacts = () => Get(contactURL);

const getContactById = (id) => Get(contactURL, id);

const addNewContact = (contact) => Post(contactURL, contact);

const updateContact = (id, newData) => Put(contactURL, id, newData);

const deleteContact = (id) => Delete(contactURL, id);

export {
  getContacts,
  getContactById,
  addNewContact,
  updateContact,
  deleteContact,
};
