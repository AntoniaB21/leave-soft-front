import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.tagsListPage || initialState;

export const selectTagsListPage = createSelector([selectSlice], state => state);
