import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.websitesPage || initialState;

export const selectWebsitesPage = createSelector([selectSlice], state => state);