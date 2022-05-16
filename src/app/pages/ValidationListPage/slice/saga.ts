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

export function* validationListSaga() {
  yield takeLatest(actions.getValidationListRequest.type, getValidationList);
}
