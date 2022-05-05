import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import api from 'utils/api';
import { initialState, loginPageActions as actions } from '.';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { current } from '@reduxjs/toolkit';

function getUser(token){
  const user = jwtDecode(token);
  return user;
}

function* signIn(action) {
  yield delay(500);
  try {
    console.log('action.payload');
    console.log(action.payload);
    const { email, password } = action.payload;
    const user = yield call(api.post, '/authentication_token', {
      email : action.payload.email,
      password: action.payload.password
    },{
      headers:{
        'Content-Type': 'application/json',
      }
    });
    console.log('response token');
    console.log(user.data.token);
    localStorage.setItem('tk', user.data.token);
    localStorage.setItem('username', user.email);
    localStorage.setItem('xyz', user.data.xyz);

    yield put(actions.signInSuccess(user.email));
    window.location.href =`/profile/${user.data.xyz}`;

  } catch (error) {
    console.log('error signing in', error);
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.signInRequest.type, signIn);
}