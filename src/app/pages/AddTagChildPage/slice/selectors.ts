import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.addTagChild || initialState;

export const selectAddTagChild = createSelector([selectSlice], state => state);
