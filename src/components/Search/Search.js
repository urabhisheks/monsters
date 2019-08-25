import React from 'react';
import './search.css';

const Search = ({placeholder, onChange, value}) => {

  return (
    <input 
      className="search"
      type="text" 
      placeholder={placeholder} 
      onChange={onChange} 
      value = {value}
  />
  );
}

export default Search;