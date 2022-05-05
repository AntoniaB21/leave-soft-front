import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { offRequestAddActions as actions } from '.';

function* postOffRequest() {
  console.log('request to the API');
  
}

export function* offRequestAddSaga() {
  yield takeLatest(actions.addOffRequestInProgress.type, postOffRequest);
}
