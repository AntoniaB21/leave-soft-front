import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { globalSaga } from './saga';
import { GlobalState } from './types';
import jwtDecode from 'jwt-decode';

export const initialState: GlobalState = {
  user: null,
  loading: true, // true
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getCurrentUser(state) {
      console.log("getCurrnt");
      const token = localStorage.getItem('tk');
      const username = localStorage.getItem('username');
      if (typeof token === 'string') {
        const user = jwtDecode(token);
        console.log('token');
        state.user = {
          username: username,
          info: user,
        };
        state.loading = false;
      } else {
        state.user = null;
        state.loading = false;
      }
    },
    logoutCurrentUser(state) {
      state.user = null;
      state.loading = false;
    },
  },
});

export const { actions: globalActions } = slice;

export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: globalSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useGlobalSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
