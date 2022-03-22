import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { loginPageActions as actions } from '.';


function* signIn(action) {
  try {
    // yield delay(500);
    // const { email, password } = action.payload;
    // const user = yield call(signInToCognito, email, password);
    // localStorage.setItem('tk', user.signInUserSession.accessToken.jwtToken);
    // localStorage.setItem('username', user.username);
    // yield put(actions.signInSuccess(user.username));
    console.log('signIn action');
    window.location.href = '/';
  } catch (error) {
    console.log('error signing in', error);
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.signInRequest.type, signIn);
}