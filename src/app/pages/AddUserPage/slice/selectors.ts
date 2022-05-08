import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.addUserPage || initialState;

export const selectAddUserPage = createSelector([selectSlice], state => state);
