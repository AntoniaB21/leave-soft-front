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

export function* addUserPageSaga() {
  yield takeLatest(actions.loadTeamRequest.type, getTeams);
}
