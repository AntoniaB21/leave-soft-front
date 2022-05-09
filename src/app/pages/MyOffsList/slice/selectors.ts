import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.myOffsList || initialState;

export const selectMyOffsList = createSelector([selectSlice], state => state);
