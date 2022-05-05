import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { offRequestAddActions as actions } from '.';

function* postOffRequest(action) {
  console.log('request to the API');
  console.log(action);
}

export function* offRequestAddSaga() {
  yield takeLatest(actions.addOffRequestInProgress.type, postOffRequest);
}
