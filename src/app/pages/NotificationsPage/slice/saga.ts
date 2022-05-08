import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { notificationsPageActions as actions } from '.';

type Params = { payload: { [k: string]: any }; type: string };

function* getNotifications({ payload }: Params) {
  try {
    const userNotifs = yield call(api.get, `api/users/${payload.id}/notifications`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    console.log('userNotifs');
    console.log(userNotifs);
    yield put(actions.loadNotificationsSuccess(userNotifs.data['hydra:member']));
  } catch (error) {
    console.log('ERROR');
    yield put(
      actions.loadNotificationsFailure({
        loading:false,
        data:[{}],
        message: 'Failed cannot load notifications',
      }),
    );
  }
 
}

export function* notificationsPageSaga() {
  yield takeLatest(actions.loadNotificationsRequest.type, getNotifications);
}
