import { PayloadAction } from '@reduxjs/toolkit';
import { Stethoscope } from 'tabler-icons-react';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { addTagSaga } from './saga';
import { AddTagState } from './types';

export const initialState: AddTagState = {
  loading: false,
  message: '',
  messageColor: '',
  data: []
};

const slice = createSlice({
  name: 'addTag',
  initialState,
  reducers: {
    addTagRequest(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading=true;
    },
    addTagSuccess(state, action: PayloadAction<any>) {
      console.log('post');
      state.loading=false;
    },
    addTagFailure(state, action: PayloadAction<any>) {
      state.loading=false;
    },
  },
});

export const { actions: addTagActions } = slice;

export const useAddTagSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addTagSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAddTagSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
