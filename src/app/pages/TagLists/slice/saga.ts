import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { websitesPageActions as actions } from '.';
import api from 'utils/api';

function* getAllWebsites() {
  try {
    const items = yield call(api.get, '/tags');
    yield put(actions.loadWebsitesSuccess(items.data));
  } catch (error) {
    console.log(error);
    yield put(
      actions.loadWebsitesFailure({
        message: 'Failed to load websites',
      }),
    );
  }
}

export function* websitesPageSaga() {
  yield takeLatest(actions.loadWebsitesRequest.type, getAllWebsites);
}
