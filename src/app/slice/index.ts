import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { globalSaga } from './saga';
import { GlobalState } from './types';
import jwtDecode from 'jwt-decode';

export const initialState: GlobalState = {
  user: null,
  loading: true,
};

interface myToken{
  token: string,
  exp:number,
  username:string,
}

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getCurrentUser(state) {
      const token = localStorage.getItem('tk');
      const username = localStorage.getItem('username');
      const userId = localStorage.getItem('xyz');
      if (typeof token === 'string') {
        const user = jwtDecode<myToken>(token);
        if (new Date(user.exp * 1000) < new Date()) {
          state.user = null;
          state.loading = false;
        }
        state.user = {
          username: user.username,
          info: user,
          xyz: userId,
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
