import { format } from 'path';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { offRequestAddActions as actions } from '.';

const postRequest = (payload) => {
  const user = localStorage.getItem('xyz');
  return api.post('api/off_requests',{
      dateStart: new Date(payload.dateStart).toISOString().slice(0,10),
      dateEnd: new Date(payload.dateEnd).toISOString().slice(0,10),
      comments:payload.comments,
      user:`/api/users/${user}`
  },{
    headers:{
      'Content-Type': 'application/json',
    }
  })
};

function* postOffRequestFlow(action) {
  try {
    const response = yield call(postRequest, action.payload);
    if (response){
      yield put(actions.addOffRequestSuccess({
        message: 'Demande de congés ajoutée',
        messageColor:'green'
      })); 
    }
    window.location.href =`/prendre-un-off`;
  } catch (error) {
    console.log('error', error);
    yield put(actions.addOffRequestFailure({
      message: `${error.message}`,
      messageColor:'red'
    }));
  }
}

export function* offRequestAddSaga() {
  yield takeLatest(actions.addOffRequestInProgress.type, postOffRequestFlow);
}
