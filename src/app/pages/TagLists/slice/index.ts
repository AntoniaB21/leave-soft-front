import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { websitesPageSaga } from './saga';
import { WebsitesPageState } from './types';

export const initialState: WebsitesPageState = {
  loading: false,
  data: [],
};

const slice = createSlice({
    name: 'websitesPage',
    initialState,
    reducers: {
      loadWebsitesRequest(state, action: PayloadAction<any>) {
        state.loading = true;
      },
      loadWebsitesSuccess(state, action: PayloadAction<any>) {
        state.data = action.payload;
        state.loading = false;
      },
      loadWebsitesFailure(state, action: PayloadAction<any>) {
        state.loading = false;
      },
    },
  });
  
  export const { actions: websitesPageActions } = slice;

  export const useWebsitesPageSlice = () => {
    useInjectReducer({ key: slice.name, reducer: slice.reducer });
    useInjectSaga({ key: slice.name, saga: websitesPageSaga });
    return { actions: slice.actions };
  };