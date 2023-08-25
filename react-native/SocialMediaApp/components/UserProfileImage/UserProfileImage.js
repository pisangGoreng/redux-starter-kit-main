import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import style from './style';

const UserProfileImage = () => {
  return (
    <View style={style.userImageContainer}>
      <Image source={require('../../assets/images/default_profile.png')} />
    </View>
  );
};

export default UserProfileImage;
