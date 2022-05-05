import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { offRequestAddSaga } from './saga';
import { OffRequestAddState } from './types';

export const initialState: OffRequestAddState = {
  loading: false,
  data: []
};

const slice = createSlice({
  name: 'offRequestAdd',
  initialState,
  reducers: {
    addOffRequestInProgress(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading=true;
    },
    addOffRequestSuccess(state, action: PayloadAction<any>) {
      state.loading=false;
    },
    addOffRequestFailure(state, action: PayloadAction<any>) {
      state.loading=false;
    },
  },
});

export const { actions: offRequestAddActions } = slice;

export const useOffRequestAddSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: offRequestAddSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useOffRequestAddSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
