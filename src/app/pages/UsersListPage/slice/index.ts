import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { usersListPageSaga } from './saga';
import { UsersListPageState } from './types';

export const initialState: UsersListPageState = {
  loading: false,
  data: [],
  message: ''
};

const slice = createSlice({
  name: 'usersListPage',
  initialState,
  reducers: {
    loadUsersListRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    loadUsersListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.message = '';
      state.loading = false;
    },
    loadUsersListFailure(state, action: PayloadAction<any>) {
      state.message = action.payload.message;
      state.loading = false;
    },
  },
});

export const { actions: usersListPageActions } = slice;

export const useUsersListPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: usersListPageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUsersListPageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
