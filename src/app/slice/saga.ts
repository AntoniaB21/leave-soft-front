import { push } from 'connected-react-router';
import { put, takeLatest } from 'redux-saga/effects';
import { globalActions as actions } from '.';

function* logoutCurrentUser() {
  yield localStorage.removeItem('tk');
  yield localStorage.removeItem('username');
  yield put(push('/login'));
}

export function* globalSaga() {
  yield takeLatest(actions.logoutCurrentUser.type, logoutCurrentUser);
}
