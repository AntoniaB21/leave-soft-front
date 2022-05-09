import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.offRequestAdd || initialState;

export const selectOffRequestAdd = createSelector(
  [selectSlice],
  state => state,
);
