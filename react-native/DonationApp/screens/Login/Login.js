import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import globalStyles from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {logIn, resetToInitialState} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('wahyuendysantoso@gmail.com');
  const [password, setPassword] = useState('bukabuka');

  const [sucess, setSuccess] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyles.marginBottom24}>
          <Header type={1} title={'Welcome back'} />
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
            title="Login"
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
          />
        </View>

        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header type={3} title={'Dont have an account?'} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

Login.default = {};

Login.propTypes = {};

export default Login;
