import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { profilePageActions as actions } from '.';

type Params = { payload: { [k: string]: any }; type: string };

function* getUserInfo({ payload }: Params) {
  try {
    const userInfo = yield call(api.get, `api/users/${payload.id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    yield put(actions.loadUserInfoSuccess(userInfo.data));
  } catch (error) {
    console.log(error);
    yield put(
      actions.loadUserInfoFailure({
        message: 'Failed to load user profile info',
      }),
    );
  }
}

export function* profilePageSaga() {
  yield takeLatest(actions.loadUserInfoRequest.type, getUserInfo);
}
