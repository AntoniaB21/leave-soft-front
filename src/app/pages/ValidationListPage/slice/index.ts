import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { validationListSaga } from './saga';
import { ValidationListState } from './types';

export const initialState: ValidationListState = {
  loading: false,
  data: []
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
