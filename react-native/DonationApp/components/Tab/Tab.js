import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Pressable} from 'react-native';

import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWdith = {width: horizontalScale(paddingHorizontal * 2 + width)};

  return (
    <Pressable
      // isDisabled={props.isInactive}
      style={[style.tab, props.isInactive && style.inactiveTab, tabWdith]}
      onPress={() => props.onPress(props.tabId)}>
      <Text
        onTextLayout={event => {
          // * untuk dapetin lebar text nya
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.default = {
  title: '',
  isInactive: false,
  onPress: () => {},
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
  tabId: PropTypes.number,
};

export default Tab;
