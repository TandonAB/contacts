import baseURL from '../api/baseUrl'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_CONTACTS_PENDING,
  REQUEST_CONTACTS_SUCCESS,
  REQUEST_CONTACTS_FAILED,
  REQUEST_CONTACT_PENDING,
  REQUEST_CONTACT_SUCCESS,
  REQUEST_CONTACT_FAILED,
} from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

// List of Contacts
export const requestContacts = () => (dispatch) => {
  dispatch({ type: REQUEST_CONTACTS_PENDING });
  baseURL.get('/users')
    .then(res => {
      dispatch({ type: REQUEST_CONTACTS_SUCCESS, payload: res.data.data })
    })
    .catch(error => dispatch({ type: REQUEST_CONTACTS_FAILED, payload: error }))
}

// Single Contact
export const requestContact = (id) => (dispatch) => {
  dispatch({ type: REQUEST_CONTACT_PENDING });
  baseURL.get(`/users/${id}`)
    .then(res => {
      // console.log(res.data.data)
      dispatch({ type: REQUEST_CONTACT_SUCCESS, payload: res.data.data })
    })
    .catch(error => dispatch({ type: REQUEST_CONTACT_FAILED, payload: error }))
}