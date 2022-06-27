import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { caseReducer } from "./action-creater";
import { login } from "./async-action-creater";
import { IAuthState, SetUserType } from "./types";

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  error: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: caseReducer,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload !== null) {
        state.user = action.payload;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(`----> login rejected case`);
      console.log(action.payload);
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
