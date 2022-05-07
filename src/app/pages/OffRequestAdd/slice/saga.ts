import { format } from 'path';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { offRequestAddActions as actions } from '.';

function* postOffRequest(action) {
  try {
    const user = localStorage.getItem('xyz');
    console.log('action.payload');
    console.log(new Date(action.payload.dateStart).toISOString().slice(0,10));
    const data = yield call(api.post, 'api/off_requests',{
      dateStart: new Date(action.payload.dateStart).toISOString().slice(0,10),
      dateEnd: new Date(action.payload.dateEnd).toISOString().slice(0,10),
      comments:action.payload.comments,
      user:`/api/users/${user}`
    },
    {
      headers:{
        'Content-Type': 'application/json',
      }
    });
    yield put(actions.addOffRequestSuccess({
      message: 'Demande de congés ajoutée'
    }));
  } catch (error) {
    console.log('error', error);
    yield actions.addOffRequestFailure({
      message:'Cannot add this off request'
    })
  }

}

export function* offRequestAddSaga() {
  yield takeLatest(actions.addOffRequestInProgress.type, postOffRequest);
}
