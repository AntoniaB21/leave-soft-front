import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { myOffsListActions as actions } from '.';

type Params = { payload: { [k: string]: any }; type: string };

function* getMyOffsRequests({ payload }: Params) {
  try {
  const offRequests = yield call(api.get,`/api/users/${payload.id}/off_requests`);
  yield put(actions.loadMyOffRequestSuccess(offRequests.data["hydra:member"]));
  } catch (error) {
    console.log(error);
    yield put(
      actions.loadMyOffRequestFailure({
        message: 'Failed to load user offs request',
      }),
    );
  }
  
}

export function* myOffsListSaga() {
  yield takeLatest(actions.loadMyOffRequestInProgress.type, getMyOffsRequests);
}
