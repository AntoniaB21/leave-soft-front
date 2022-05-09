import { STATUS_CODES } from 'http';
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
  } catch (error) {
    console.log('error', error.response.status);
    switch (error.response.status) {
      case 422:
        error.message = 'Vous avez deja des demandes en attente ou validées à ces dates'
        break;
      case 401:
        error.message = 'Votre session a expiré veuillez vous reconnecter'
        break;
      default:
        error.message = 'Une erreur est survenue. Veuillez recommencer'
        break;
    }
    yield put(actions.addOffRequestFailure({
      message: `${error.message}`,
      messageColor:'red'
    }));
  }
}

export function* offRequestAddSaga() {
  yield takeLatest(actions.addOffRequestInProgress.type, postOffRequestFlow);
}
