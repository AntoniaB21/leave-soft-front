import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { tagsListPageActions as actions } from '.';

type Params = { payload: { [k: string]: any }; type: string };


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


function* deleteTagItem({ payload }: Params) {
  try {
    let id = payload.itemId.replace('/api/tags/','');
    const tags = yield call(api.delete, `api/tags/${id}`);
    yield put(actions.deleteTagActionSuccess({}));
  } catch (error) {
    console.log('ERROR', error);
    yield put(actions.deleteTagActionFailure({
      message:'Failed to delete tag'
    }));
  }
}

export function* tagsListPageSaga() {
  yield takeLatest(actions.loadTagsListRequest.type, getTagsList);
  yield takeLatest(actions.deleteTagAction.type, deleteTagItem);
}
