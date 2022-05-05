import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { myOffsListActions as actions } from '.';

function* getMyOffsRequests() {
  
}

export function* myOffsListSaga() {
  yield takeLatest(actions.loadMyOffRequestInProgress.type, getMyOffsRequests);
}
