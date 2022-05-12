import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { profilePageSaga } from './saga';
import { ProfilePageState } from './types';

export const initialState: ProfilePageState = {
  loading: false,
  data: {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    offRequests: [{}],
    teams: [{}],
    dateEntrance: '',
    tagItems: [{}],
    daysEarned: 0,
    daysTaken: 0,
    daysLeft: 0,
    jobTitle:'Responsable RH'
  }
};

const slice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    loadUserInfoRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    loadUserInfoSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    loadUserInfoFailure(state, action: PayloadAction<any>) {
      state.loading = false;
    },
  },
});

export const { actions: profilePageActions } = slice;

export const useProfilePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: profilePageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useProfilePageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
