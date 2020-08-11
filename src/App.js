import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ContactsList from './components/ContactsList';
import { connect } from 'react-redux';
import { requestContacts, setSearchField } from './constants/action';
import SearchBox from './components/SearchBox';

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
  const [arrayOrder, setArrayOrder] = useState(contacts);

  useEffect(() => {
    onRequestContacts()
  }, [])

  useEffect(() => {
    setArrayOrder(contacts)
  }, [contacts])


  const filteredContacts = arrayOrder.filter(contact => {
    let name = `${contact.first_name} ${contact.last_name}`;
    return name.toLowerCase().includes(searchField.toLowerCase());
  })
  const onSelect = (e) => {
    if (e.target.value === 'all') {
      setArrayOrder(contacts)
    } else if (e.target.value === 'asc') {
      let _arrayOrder = [...arrayOrder]
      _arrayOrder = _arrayOrder.sort((a, b) => a.first_name.localeCompare(b.first_name))
      setArrayOrder(_arrayOrder);
    } else if (e.target.value === 'dsc') {
      let _arrayOrder = [...arrayOrder]
      _arrayOrder = _arrayOrder.sort((b, a) => a.first_name.localeCompare(b.first_name))
      return setArrayOrder(_arrayOrder);
    }
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
                      <Form>
                        <Form.Control as="select" onChange={onSelect} style={customSelectStyle}>
                          <option value="all">ALL</option>
                          <option value="asc">A-Z</option>
                          <option value="dsc">Z-A</option>
                        </Form.Control>
                      </Form>
                    </div>
                    <div className="float-right flex-row-reverse">
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

const customSelectStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: '#fff',
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: '100%',
  backgroundPositionY: '8px',
  width: 80,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
