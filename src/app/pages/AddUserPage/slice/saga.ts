import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { addUserPageActions as actions } from '.';

function* getTeams() {
  try {
    const teams =  yield call(api.get, `api/teams`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    yield put(actions.loadTeamSuccess(teams.data["hydra:member"]));
  } catch (error) {
    console.log('ERROR',error);
    yield put(
      actions.loadTeamFailure({
        message:'Failed to load teams'
      }
    ));
  }
}

function* loadTagChildrenContracts() {
  try {
    const tagChildren =  yield call(api.get, `api/tags/1/tag_childrens`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    console.log('load tag children');
    yield put(actions.loadTagChildrenSuccess(tagChildren.data["hydra:member"]));

  } catch (error) {
    console.log('ERROR',error);
    yield put(
      actions.loadTagChildrenFailure({
        message:'Failed to load tag children'
      }
    ));
  }
}
export function* addUserPageSaga() {
  yield takeLatest(actions.loadTeamRequest.type, getTeams);
  yield takeLatest(actions.loadTagChildrenRequest.type, loadTagChildrenContracts);
}
