import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.usersListPage || initialState;

export const selectUsersListPage = createSelector(
  [selectSlice],
  state => state,
);
