import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Pressable, TextInput} from 'react-native';

import style from './style';
import {horizontalScale, scaleFontsSize} from '../../assets/styles/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = props => {
  const [search, setSearch] = useState('');

  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  return (
    <Pressable style={style.searchInputContainer} onPress={() => handleFocus()}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontsSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        placeholder={props.placeholder}
        onChangeText={value => {
          handleSearch(value);
        }}
      />
    </Pressable>
  );
};

Search.default = {
  onSearch: () => {},
  placeholder: 'search',
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
