// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { takeOffRequestPageActions as actions } from '.';

import { call, put, takeLatest } from "redux-saga/effects";
import api from "utils/api";
import { takeOffRequestPageActions as actions } from '.';

function* postOffRequest() {
  try {
    const items = yield call(api.get, '/api/off_requests');
    yield put(actions.loadPostOffRequestSuccess(items.data));
  } catch (error) {
    console.log(error);
    yield put(
      actions.loadPostOffRequestFailure({
        message: 'Failed to post off request form',
      }),
    );
  }
}

export function* takeOffRequestPageSaga() {
  yield takeLatest(actions.loadPostOffRequest.type, postOffRequest);
}
