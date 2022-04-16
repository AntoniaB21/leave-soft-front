import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import api from 'utils/api';
import { loginPageActions as actions } from '.';
import axios from 'axios';

function* signIn(action) {
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
    // yield delay(500);
    console.log('user response token');
    console.log(user);
    // localStorage.setItem('tk', user.data.token);
    // localStorage.setItem('username', user.username);
    // yield put(actions.signInSuccess(user.username));
    // window.location.href = '/tags'; // action suivante - construire la page profile
  } catch (error) {
    console.log('error signing in', error);
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.signInRequest.type, signIn);
}