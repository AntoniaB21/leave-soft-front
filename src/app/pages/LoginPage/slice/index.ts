import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginPageSaga } from './saga';
import { LoginPageState } from './types';

export const initialState: LoginPageState = {
  loading: false,
};

const slice = createSlice({
  name: 'LoginPage',
  initialState,
  reducers: {
    signInRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    signInSuccess(state, action: PayloadAction<any>) {
      console.log('loggin successfull')
      state.loading = false;
    },
    signInFailed(state, action: PayloadAction<any>) {
      console.log('loggin failed')
      state.loading = false;
    },
  },
});

export const { actions: loginPageActions } = slice;

export const useLoginPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginPageSaga });
  return { actions: slice.actions };
};
