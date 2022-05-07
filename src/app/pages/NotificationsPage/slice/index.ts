import { PayloadAction } from '@reduxjs/toolkit';
import { Satellite } from 'tabler-icons-react';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { notificationsPageSaga } from './saga';
import { NotificationsPageState } from './types';

export const initialState: NotificationsPageState = {
  loading: false,
  data: [{}],
  message:''
};

const slice = createSlice({
  name: 'notificationsPage',
  initialState,
  reducers: {
    loadNotificationsRequest(state, action: PayloadAction<any>) {
      state.loading=true;
    },
    loadNotificationsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.message = action.payload.message;
      state.loading=false;
    },
    loadNotificationsFailure(state, action: PayloadAction<any>) {
      console.log(action);
      state.message=action.payload.message;
      state.loading=false;
    },
  },
});

export const { actions: notificationsPageActions } = slice;

export const useNotificationsPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: notificationsPageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useNotificationsPageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
