import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { tagsListPageSaga } from './saga';
import { TagsListPageState } from './types';

export const initialState: TagsListPageState = {
  loading: false,
  tags: []
};

const slice = createSlice({
  name: 'tagsListPage',
  initialState,
  reducers: {
    loadTagsListRequest(state, action: PayloadAction<any>) {
      state.loading=true;
    },
    loadTagsListSuccess(state, action: PayloadAction<any>) {
      state.tags = action.payload;
      state.loading=false;
    },
    loadTagsListFailure(state, action: PayloadAction<any>) {
      state.loading=false;
    },
    deleteTagAction(state, action: PayloadAction<any>) {
      state.loading=true;
    },
    deleteTagActionSuccess(state, action: PayloadAction<any>) {
      state.loading=true;
    },
    deleteTagActionFailure(state, action: PayloadAction<any>) {
      state.loading=true;
    },
  },
});

export const { actions: tagsListPageActions } = slice;

export const useTagsListPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: tagsListPageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTagsListPageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
