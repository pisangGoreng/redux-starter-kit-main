import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import globalStyles from '../../assets/styles/main';
import style from './style';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>

        <View style={style.userNameContainer}>
          <Text style={style.userName}>Asasasa</Text>
        </View>

        <View style={style.profileStatsContainer}>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>45</Text>
            <Text style={style.singleStatText}>Following</Text>
          </View>

          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>30M</Text>
            <Text style={style.singleStatText}>Followers</Text>
          </View>

          <View style={style.singleStatContainer}>
            <Text style={style.singleStatNumber}>100</Text>
            <Text style={style.singleStatText}>Posts</Text>
          </View>
        </View>

        <View style={style.border} />

        <View style={{height: '100%'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
