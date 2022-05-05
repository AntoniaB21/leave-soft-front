import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { myOffsListSaga } from './saga';
import { MyOffsListState } from './types';

export const initialState: MyOffsListState = {
  loading: false,
  data:[],
};

const slice = createSlice({
  name: 'myOffsList',
  initialState,
  reducers: {
    loadMyOffRequestInProgress(state, action: PayloadAction<any>) {
      state.loading=true;
    },
    loadMyOffRequestSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading=false;
    },
    loadMyOffRequestFailure(state, action: PayloadAction<any>) {
      state.loading=false;
    },
  },
});

export const { actions: myOffsListActions } = slice;

export const useMyOffsListSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: myOffsListSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useMyOffsListSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
