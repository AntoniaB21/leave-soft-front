import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import api from 'utils/api';
import { loginPageActions as actions } from '.';

function* signIn(action) {
  try {
    // yield delay(500);
    const { email, password } = action.payload;
    const user = yield call(api.post, '/authentication_token', action.payload);
    console.log('user response token');
    console.log(user.data.token);
    localStorage.setItem('tk', user.data.token);
    localStorage.setItem('username', user.username);
    // yield put(actions.signInSuccess(user.username));
    window.location.href = '/'; // action suivante - construire la page profile
  } catch (error) {
    console.log('error signing in', error);
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.signInRequest.type, signIn);
}