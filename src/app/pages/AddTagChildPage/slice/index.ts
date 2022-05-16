import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { addTagChildSaga } from './saga';
import { AddTagChildState } from './types';

export const initialState: AddTagChildState = {
  loading: false,
  message: '',
  messageColor: ''
};

const slice = createSlice({
  name: 'addTagChild',
  initialState,
  reducers: {
    addTagChildRequest(state, action: PayloadAction<any>) {
      state.loading=true;
    },
    addTagChildSuccess(state, action: PayloadAction<any>) {
      state.message=action.payload.message;
      state.messageColor=action.payload.messageColor;
      state.loading=false;
    },
    addTagChildFailure(state, action: PayloadAction<any>) {
      state.message=action.payload.message;
      state.messageColor=action.payload.messageColor;
      state.loading=false;
    },
    loadTagListRequest(state, action: PayloadAction<any>) {
      state.loading=true;
    },
    loadTagListSuccess(state, action: PayloadAction<any>) {
      state.loading=false;
    },
    loadTagListFailure(state, action: PayloadAction<any>) {
      state.loading=false;
    },
  },
});

export const { actions: addTagChildActions } = slice;

export const useAddTagChildSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addTagChildSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAddTagChildSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
