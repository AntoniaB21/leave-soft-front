import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.notificationsPage || initialState;

export const selectNotificationsPage = createSelector(
  [selectSlice],
  state => state,
);
