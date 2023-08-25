import React from 'react';
import {Image, ScrollView, View, Text} from 'react-native';

import style from './style';

const ProfileTabPost = props => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabPostsContainer}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
      </View>

      <View
        style={[
          style.imageContainer,
          style.imageUpcomingRowsContainer,
          style.lastImageContainer,
        ]}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabPost;
