import {
  CHANGE_SEARCHFIELD,
  REQUEST_CONTACTS_PENDING,
  REQUEST_CONTACTS_SUCCESS,
  REQUEST_CONTACTS_FAILED,
  REQUEST_CONTACT_PENDING,
  REQUEST_CONTACT_SUCCESS,
  REQUEST_CONTACT_FAILED
} from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchContact = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload }
    default:
      return state
  }
}

// Contacts List
const initialStateContacts = {
  contacts: [],
  isPending: true
}

export const requestContacts = (state = initialStateContacts, action = {}) => {
  switch (action.type) {
    case REQUEST_CONTACTS_PENDING:
      return { ...state, isPending: true }
    case REQUEST_CONTACTS_SUCCESS:
      return { ...state, contacts: action.payload, isPending: false }
    case REQUEST_CONTACTS_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

// Contact Detail
const initialStateContact = {
  contact: [],
  isPending: true
}

export const requestContact = (state = initialStateContact, action = {}) => {
  switch (action.type) {
    case REQUEST_CONTACT_PENDING:
      return { ...state, isPending: true }
    case REQUEST_CONTACT_SUCCESS:
      return { ...state, contact: action.payload, isPending: false }
    case REQUEST_CONTACT_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}