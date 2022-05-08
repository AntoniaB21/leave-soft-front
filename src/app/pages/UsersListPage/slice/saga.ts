import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { usersListPageActions as actions } from '.';

function* getUsersList() {
  try {
    const userLists = yield call(api.get,`/api/users`);
  yield put(actions.loadUsersListSuccess(userLists.data["hydra:member"]));
  } catch (error) {
    console.log(error);
    yield put(
      actions.loadUsersListFailure({
        message: 'Failed to load users lists',
      }),
    );
  }
}

export function* usersListPageSaga() {
  yield takeLatest(actions.loadUsersListRequest.type, getUsersList);
}
