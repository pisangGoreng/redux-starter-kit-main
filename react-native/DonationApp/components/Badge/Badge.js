import React, {useRef, useState} from 'react';
// import PropTypes from 'prop-types';
import {View, Text, Pressable} from 'react-native';

import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWdith = {width: horizontalScale(paddingHorizontal * 2 + width)};

  return (
    <View style={[style.badge, badgeWdith]}>
      <Text
        onTextLayout={event => {
          // * untuk dapetin lebar text nya
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={style.title}>
        {props.title}
      </Text>
    </View>
  );
};

// Badge.default = {
//   title: '',
// };

// Badge.propTypes = {
//   title: PropTypes.string,
// };

export default Badge;
