import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.validationList || initialState;

export const selectValidationList = createSelector(
  [selectSlice],
  state => state,
);
