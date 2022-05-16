import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { validationListSaga } from './saga';
import { ValidationListState } from './types';

export const initialState: ValidationListState = {
  loading: false,
  data: [],
  message: '',
  messageColor: ''
};

const slice = createSlice({
  name: 'validationList',
  initialState,
  reducers: {
    getValidationListRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getValidationListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getValidationListFailure(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    acceptOffRequest(state, action: PayloadAction<any>) {
      state.message = '';
      state.messageColor = '';
      state.loading = true;
    },
    acceptOffRequestSuccess(state, action: PayloadAction<any>) {
      state.message = action.payload.message;
      state.messageColor = action.payload.messageColor;
      state.loading = false;
    },
    acceptOffRequestFailure(state, action: PayloadAction<any>) {
      state.message = action.payload.message;
      state.messageColor = action.payload.messageColor;
      state.loading = false;
    },
    declineOffRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    declineOffRequestSuccess(state, action: PayloadAction<any>) {
      state.message = action.payload.message;
      state.messageColor = action.payload.messageColor;
      state.loading = false;
    },
    declineOffRequestFailure(state, action: PayloadAction<any>) {
      state.message = action.payload.message;
      state.messageColor = action.payload.messageColor;
      state.loading = false;
    },
  },
});

export const { actions: validationListActions } = slice;

export const useValidationListSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: validationListSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useValidationListSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
