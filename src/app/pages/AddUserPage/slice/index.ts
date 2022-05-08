import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { addUserPageSaga } from './saga';
import { AddUserPageState } from './types';

export const initialState: AddUserPageState = {
  loading: false,
  teams: [],
  tagChildren: [],
  message: '',
  messageColor: ''
};
const slice = createSlice({
  name: 'addUserPage',
  initialState,
  reducers: {
    addUserRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    addUserSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    addUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    loadTeamRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    loadTeamSuccess(state, action: PayloadAction<any>) {
      state.teams = action.payload;
      state.loading = false;
    },
    loadTeamFailure(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    loadTagChildrenRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    loadTagChildrenSuccess(state, action: PayloadAction<any>) {
      state.tagChildren = action.payload;
      state.loading = true;
    },
    loadTagChildrenFailure(state, action: PayloadAction<any>) {
      state.loading = true;
    },
  },
});

export const { actions: addUserPageActions } = slice;

export const useAddUserPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addUserPageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAddUserPageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
