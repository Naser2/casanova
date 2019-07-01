import axios from 'axios';
import { SIGN_UP, SIGN_IN } from './types';
import { SIGNUP_URL, SIGNIN_URL, FIREBASEURL } from '../../../utils/misc';
import { bindActionCreators } from 'redux';
('prop-types');

// import  user_Reducer from '../reducers/user_reducer'

// export const signIn = () => async (dispatch, getState)=>{
//   console.log('IN USER ACTION: ',  dispatch);
//   const response = await axios.get(SIGNIN_URL);

//   return dispatch({ type: 'SIGN_IN', payload: response });
// };

export const signIn = data => dispatch => {
  const request = axios({
    method: 'GET',
    url: 'https://randomuser.me/api/',
    // data: {
    //   email: data.email,
    //   password: data.password,
    //   returnSecureToken: true
    // },
    headers: []
  })
    .then(response => {
      console.log('RESPONSE UP: ', response.data.results[0]);
      // const auth = {
      //   uid: response.data.localId || false,
      //   token: response.data.idToken || false,
      //   refToken: response.data.refreshToken || false
      // };
      console.log('RESPONSE AUTH: ', response.data.results[0]);
      dispatch({ type: SIGN_IN, payload: response.data.results[0] });
    })
    .catch(e => {
      console.log('ERROR: ', e);
      return false;
    });

  // console.log('REQUEST signUP: ', request);

  dispatch({
    type: SIGN_IN,
    payload: request
  });
};
// export const signIn = () =>  async dispatch => {
//   console.log('SIGN IN FUNC:', dispatch);
//      (dispatch) =>  {
//      fetch('https://randomuser.me/api/')
//      .then(res =>{
//        console.log('SIGN IN RES:', res);
//        res.json()
//        })
//     //  .then(users =>{
//     //   console.log('SIGN IN RES:', users);
//     //    dispatch({type: SIGN_IN, payload: users })
//     //   })
//       return ()=> ({type: SIGN_IN, payload: res})

//    }

// };

// export const signIn=()=> async dispatch => {
//   const res = await axios.get(SIGNIN_URL)
//   dispatch({
//     type: 'SIGN_IN',
//     payload: res.data
//   })
//   // return function action(dispatch) {
//   //   dispatch({ type: 'SIGN_IN' });
//   //   console.log('LOAD_QUOTE_START: ', auth);
//   //   const request = axios.get({
//   //     method: 'GET',
//   //     url: SIGNIN_URL,
//   //     headers: []
//   //   });
//   //   console.log('LOAD_QUOTE_REQUEST_MADE: ', auth);
//   //   return request.then(
//   //     response => dispatch({ type: 'SIGN_IN_SUCCESS', payload: response.data }),
//   //     err => dispatch({ type: 'SIGN_IN_FAILURE', payload: err })
//   //   );
//   // };

// }

// export const signIn = () => {
//   return (dispatch, getState) => {
//     dispatch({ type: 'LOAD_QUOTE_START' });
//     const request = axios.get(
//       'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
//     );
//     return request
//       .then(function(response) {
//         console.log(response);
//         dispatch({
//           type: 'LOAD_QUOTE_SUCCESS',
//           payload: response.data[0].quote
//         });
//       })
//       .catch(function(error) {
//         dispatch({ type: 'LOAD_QUOTE_FAILURE', payload: error });
//       });
//   };
// };

//  export function fetchOffers() {
//   return function action(dispatch) {
//     dispatch({ type: FETCH_OFFERS })

//     const request = axios({
//       method: 'GET',
//       url: `${BASE_URL}/offers`,
//       headers: []
//     });

//     return request.then(
//       response => dispatch(fetchOffersSuccess(response)),
//       err => dispatch(fetchOffersError(err))
//     );
//   }
// }
// export const signIn=(data)=> {
//  return (dispatch, getState) => {
//     dispatch({ type: 'SIGN_IN_START' });

//     axios({
//       method: 'POST',
//       url: SIGNIN_URL,
//       data: {
//         email: data.email,
//         password: data.password,
//         returnSecureToken: true
//       },
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => {
//         // const auth = {
//         //   uid: response.data.localId || false,
//         //   token: response.data.idToken || false,
//         //   refToken: response.data.refreshToken || false
//         // };
//         console.log('RESPONSE AUTH: ', response.data);
//         dispatch({ type: 'SIGN_IN_SUCCESS', payload: response.data });
//       })
//       .catch(e => {
//         console.log('ERROR: ', error);
//         dispatch({ type: 'SIGN_IN_FAILURE', payload: error });
//       });
//   };

//   // console.log('REQUEST1 signIN: ', request);
//   // return { type: SIGN_IN, payload: request  };
// }
