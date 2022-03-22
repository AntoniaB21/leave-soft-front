import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.LoginPage || initialState;

export const selectLoginPage = createSelector([selectSlice], state => state);
