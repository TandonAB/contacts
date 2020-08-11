import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { requestContacts, requestContact, searchContact } from './reducer';


const rootReducers = combineReducers({
  requestContacts,
  requestContact,
  searchContact
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;