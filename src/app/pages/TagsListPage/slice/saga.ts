import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { tagsListPageActions as actions } from '.';

function* getTagsList() {
  try {
    const tags = yield call(api.get, 'api/tags');
    yield put(actions.loadTagsListSuccess(tags.data["hydra:member"]));
  } catch (error) {
    console.log('ERROR', error);
    yield put(actions.loadTagsListFailure({
      message:'Cannot load tag list'
    }));
  }
}

export function* tagsListPageSaga() {
  yield takeLatest(actions.loadTagsListRequest.type, getTagsList);
}
