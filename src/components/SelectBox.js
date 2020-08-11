import React from 'react';
import { Form } from 'react-bootstrap';

const SelectBox = ({ onSelect }) => {
  const change = (event) => {
    return event.target.value;
  }
  return (
    <>
      <Form>
        <Form.Group controlId="select-contact" >
          {/* <Form.Label>Custom select</Form.Label> */}
          <Form.Control as="select" onChange={change} custom style={customSelectStyle}>
            <option value="all">ALL</option>
            <option value="asc">A-Z</option>
            <option value="dsc">Z-A</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  )
}

const customSelectStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: '#fff',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
  backgroundRepeat: 'no-repeat',
  // backgroundPositionX: '100%',
  // backgroundPositionY: '5px',
}

export default SelectBox;
