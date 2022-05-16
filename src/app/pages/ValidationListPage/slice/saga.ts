import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { validationListActions as actions } from '.';

type Params = { payload: { [k: string]: any }; type: string };

function* getValidationList({ payload }: Params) {
  try {
      const offRequests = yield call(api.get,`/api/users/${payload.id}/validationList`,{
        headers:{
          'Content-Type':'application/json'
        }
      });
    yield put(actions.getValidationListSuccess(offRequests.data["hydra:member"]));
  } catch (error) {
    yield put(
      actions.getValidationListFailure({
        message: 'Failed to load user validation list',
      }),
    );
  }
}

function* acceptOffRequest({ payload }: Params) {
  try {
    console.log(payload.itemId);
    let id = payload.itemId.replace('/api/off_requests/','');
    console.log(id);
      const offRequests = yield call(api.get,`/api/off_requests/${id}/accepted`,{
        headers:{
          'Content-Type':'application/json'
        }
      });
      yield put(actions.acceptOffRequestSuccess({
        message: 'Demande de congés acceptée. Le destinataire sera notifié',
        messageColor:'green'
      }));
  } catch (error) {
    yield put(
      actions.acceptOffRequestFailure({
        message: 'Une erreur est survenue lors de la validation. Veuillez recommencer',
      }),
    );
  }
}

function* declineOffRequest({ payload }: Params) {
  try {
    let id = payload.itemId.replace('/api/off_requests/','');
      const offRequests = yield call(api.get,`/api/off_requests/${id}/rejected`,{
        headers:{
          'Content-Type':'application/json'
        }
      });
      yield put(actions.declineOffRequestSuccess({
        message: 'Demande de congés refusée. Le destinataire sera notifié',
        messageColor:'red'
      }));
  } catch (error) {
    yield put(
      actions.getValidationListFailure({
        message: 'Failed to load user validation list',
        messageColor:'red'
      }),
    );
  }

}

export function* validationListSaga() {
  yield takeLatest(actions.getValidationListRequest.type, getValidationList);
  yield takeLatest(actions.acceptOffRequest.type, acceptOffRequest);
  yield takeLatest(actions.declineOffRequest.type, declineOffRequest);
}
