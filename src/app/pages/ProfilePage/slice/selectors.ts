import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.profilePage || initialState;

export const selectProfilePage = createSelector([selectSlice], state => state);
