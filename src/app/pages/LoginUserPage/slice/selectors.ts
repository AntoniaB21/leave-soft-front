import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.loginUserPage || initialState;

export const selectLoginUserPage = createSelector(
  [selectSlice],
  state => state,
);
