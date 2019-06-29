import { AsyncStorage } from 'react-native';

export const FIREBASEURL = `https://casanova-673d5.firebaseio.com`;
export const FIREBASE_APIKEY = `AIzaSyD6mnANmtwNkiooIpbzHk3o6N2b95fg_tA`;
export const SIGNUP_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_APIKEY}`;
// export const SIGNIN_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE_APIKEY}`;

export const SIGNIN_URL  = `https://randomuser.me/api/`
export const REFRESH = ``;

export const getTokens = cb => {
  AsyncStorage.multiGet([
    '@casanova@token',
    '@casanova@refeshToken',
    '@casanova@expireToken',
    '@casanova@uid'
  ]).then(values => {
    cb(values);
  });
};

export const setTokens = (values, cb) => {
  const dateNow = Date();
  const expiration = dateNow.getTime() + 3600 * 1000;
  AsyncStorage.multiSet([
    ['@casanova@token', values.token],
    ['@casanova@refeshToken', values.refToken],
    ['@casanova@expireToken', expiration.toString()],
    ['@casanova@uid', values.uid]
  ]).then(res => {
    cb();
  });
};
