import React from 'react';
import { FiSearch } from 'react-icons/fi'

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search contacts'
        onChange={searchChange}
        style={searchBoxStyle}
      />
      <FiSearch className="" style={{ fontSize: 20 }} />
    </div>
  );
}

const searchBoxStyle = {
  background: 'transparent',
  border: 'none',
  color: '#fff'
}

export default SearchBox;