import React, {useRef, useState} from 'react';
// import PropTypes from 'prop-types';
import {View, Image, Pressable} from 'react-native';

import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

// BackButton.default = {};

// BackButton.propTypes = {
//   onPress: PropTypes.func,
// };

export default BackButton;
