import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, AuthType } from "./types";

const initialState: IAuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthType>) {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
