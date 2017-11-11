import React, {PropTypes} from 'react';
import { Input } from 'antd';
const Search = Input.Search;

export const SearchBar = () => {
  return (
    <Search
    placeholder="input search text"
    style={{ width: 200,margin:'0 20px' }}
    onSearch={value => console.log(value)}

  />
  );
}

SearchBar.propTypes = {
};
