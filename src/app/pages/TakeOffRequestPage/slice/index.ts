import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { takeOffRequestPageSaga } from "./saga";
import { TakeOffRequestPageState } from "./types";

export const initialState: TakeOffRequestPageState = {
  loading: false,
  data: []
};

const slice = createSlice({
  name: "takeOffRequestPage",
  initialState,
  reducers: {
    loadPostOffRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    loadPostOffRequestSuccess(state, action: PayloadAction<any>) {
      console.log("successfull");
      state.data = action.payload;
      state.loading = false;
    },
    loadPostOffRequestFailure(state, action: PayloadAction<any>) {
      console.log("failure");
      state.loading = false;
    },
  },
});

export const { actions: takeOffRequestPageActions } = slice;

export const useTakeOffRequestPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: takeOffRequestPageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTakeOffRequestPageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
