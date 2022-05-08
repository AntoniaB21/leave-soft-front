import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { addUserPageSaga } from './saga';
import { AddUserPageState } from './types';

export const initialState: AddUserPageState = {
  loading: false,
  data: [],
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
