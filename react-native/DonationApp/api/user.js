import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);

    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'that email already is already in use'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'that email address is invalid'};
    }

    console.log(error);
    return {error: 'something error'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();

    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'please enter a correct password'};
    }

    if (error.code === 'auth/user-not-found') {
      return {status: false, error: 'email not exist'};
    }
    return {status: false, error: error.message};
  }
};

export const logOut = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    let response = auth().currentUser.getIdToken(true);
    // * call action diluar component
    store.dispatch(updateToken(response));
    console.log('update token for you');
    return response;
  } catch (error) {
    return error;
  }
};
