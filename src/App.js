import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactsList from './components/ContactsList';
import { connect } from 'react-redux';
import { requestContacts, setSearchField } from './constants/action';
import { FiSearch } from 'react-icons/fi';
import SearchBox from './components/SearchBox';
import SelectBox from './components/SelectBox';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchContact.searchField,
    contacts: state.requestContacts.contacts,
    isPending: state.requestContacts.isPending
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestContacts: () => dispatch(requestContacts()),
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

const App = ({ isPending, contacts, onRequestContacts, onSearchChange, searchField }) => {
  useEffect(() => {
    onRequestContacts()
  }, [])

  const filteredContacts = contacts.filter(contact => {
    let name = `${contact.first_name} ${contact.last_name}`;
    return name.toLowerCase().includes(searchField.toLowerCase());
  })

  const onSelect = (e) => {
    console.log("object", e)
  }

  return (
    <div className="container">
      <Row className="justify-content-md-center">
        <Col md="auto" className="p-4" style={contactBoxStyle}>
          {
            isPending
              ? <h3>Loading</h3>
              : (
                <>
                  <div style={{ minHeight: 20 }}>
                    <div className="float-left">
                      <SelectBox onSelect={(e) => onSelect(e)} />
                    </div>
                    <div className="float-right">
                      {/* <FiSearch className="" style={{ fontSize: 20 }} /> */}
                      <SearchBox searchChange={onSearchChange} />
                    </div>
                  </div>
                  <ContactsList contacts={filteredContacts} />
                </>
              )
          }
        </Col>
      </Row>
    </div>
  );
}

const contactBoxStyle = {
  backgroundColor: '#34a8eb',
  color: '#fff',
  width: 600,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
