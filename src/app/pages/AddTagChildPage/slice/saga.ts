import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import slugify from 'slugify';
import api from 'utils/api';
import { addTagChildActions as actions } from '.';

function* getTagsListRequest() {
  try {
    const tags = yield call(api.get, 'api/tags');
    yield put(actions.loadTagListSuccess(tags.data["hydra:member"]));
  } catch (error) {
    console.log('ERROR', error);
    yield put(actions.loadTagListFailure({
      message:'Cannot load tag list'
    }));
  }
}

function* addTagChild(action) {
  try {
    const request= yield call(api.post, 'api/tag_children',{
      name: action.payload.name,
      slug: slugify(action.payload.name),
      description: action.payload.description,
      maxBalance:action.payload.days,
      measureUnit:action.payload.measureUnit,
      tag:action.payload.tag
    },{
      headers:{
        'Content-Type':'application/json'
      }
    });
    yield put(actions.addTagChildSuccess({
      message: 'Tag item ajouté',
      messageColor:'green'
    }));
  } catch (error) {
    console.log('ERROR', error);
    yield put(actions.loadTagListFailure({
      message:'Cannot load tag list'
    }));
  }
}
export function* addTagChildSaga() {
    yield takeLatest(actions.loadTagListRequest.type, getTagsListRequest);
    yield takeLatest(actions.addTagChildRequest.type, addTagChild);
}
