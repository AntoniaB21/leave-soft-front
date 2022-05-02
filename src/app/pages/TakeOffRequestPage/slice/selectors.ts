import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state.takeOffRequestPage || initialState;

export const selectTakeOffRequestPage = createSelector(
  [selectSlice],
  (state) => state
);
