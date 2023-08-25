import React from 'react';
// import PropTypes from 'prop-types';
import {View, Text, Pressable} from 'react-native';

import style from './style';

const Button = props => {
  return (
    <Pressable
      isDisabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.disabled]}
      onPress={() => props.onPress()}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

// Button.default = {
//   title: '',
//   isDisabled: false,
//   onPress: () => {},
// };

// Button.propTypes = {
//   title: PropTypes.string,
//   isDisabled: PropTypes.bool,
//   onPress: PropTypes.func,
// };

export default Button;
