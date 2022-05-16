import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.addTag || initialState;

export const selectAddTag = createSelector([selectSlice], state => state);
