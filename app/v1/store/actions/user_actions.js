import axios from 'axios'


export function signUp(){

  return {
    type: 'SIGN_UP',
    payload: {
      user: 'bigben@gmail.com',
      token: 'loginthingyrandom64baseurlencoded'
    }
  }
}
export function signIn(){
  
  return{
    type: 'SIGN_IN',

    payload:{
       user: 'bigben@gmail.com',
      token: 'signinthingyrandom64baseurlencoded'
    }
  }
}