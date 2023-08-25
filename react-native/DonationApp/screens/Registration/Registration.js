import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('wahyuendysantoso@gmail.com');
  const [password, setPassword] = useState('bukabuka');
  const [fullName, setFullName] = useState('endy');

  const [sucess, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyles.marginBottom24}>
          <Header type={1} title={'Hello and welcome!'} />
        </View>

        <View style={globalStyles.marginBottom24}>
          <Input
            label={'first & last name'}
            placeholder="Enter name"
            onChangeText={value => setFullName(value)}
          />
        </View>

        <View style={globalStyles.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'email'}
            placeholder="Enter your email"
            onChangeText={value => setEmail(value)}
          />
        </View>

        <View style={globalStyles.marginBottom24}>
          <Input
            secureTextEntry={true}
            keyboardType={'email-address'}
            label={'password'}
            placeholder="Enter your password"
            onChangeText={value => setPassword(value)}
          />
        </View>

        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {sucess.length > 0 && <Text style={style.sucess}>{sucess}</Text>}
        <View style={globalStyles.marginBottom24}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length <= 3
            }
            title="Register"
            onPress={async () => {
              let user = await createUser(
                'endy',
                'wahyuendysantoso2@gmail.com',
                'bukabuka',
              );

              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('you have successfully registered');
                setTimeout(() => {
                  navigation.goBack();
                }, 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Registration.default = {};

Registration.propTypes = {};

export default Registration;
