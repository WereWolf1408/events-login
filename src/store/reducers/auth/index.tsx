import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import {
  IAuthState,
  SetAuthType,
  SetErrorType,
  SetIsLoadingType,
  SetUserType,
} from "./types";

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  error: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<SetAuthType>) {
      state.isAuth = action.payload;
    },
    setError(state, action: PayloadAction<SetErrorType>) {
      state.error = action.payload;
    },
    setUser(state, action: PayloadAction<SetUserType>) {
      state.user = action.payload;
    },
    setIsLoading(state, action: PayloadAction<SetIsLoadingType>) {
      state.isLoading = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
