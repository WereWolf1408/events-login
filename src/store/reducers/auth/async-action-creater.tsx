import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { authActions } from "./";

export const login = createAsyncThunk<
  IUser | null,
  IUser,
  { dispatch: AppDispatch; rejectValue: string }
>("auth/login", async (loginData, thunk) => {
  try {
    thunk.dispatch(authActions.setIsLoading(true));
    let mockUser = await new Promise((resolve) => {
      setTimeout(async () => {
        const response = await axios.get<IUser[]>("./users.json");
        const mockUser = response.data.find(
          (user) =>
            user.username === loginData.username &&
            user.password === loginData.password
        );
        console.log(mockUser);
        if (mockUser) {
          thunk.dispatch(authActions.setAuth(true));
          resolve(mockUser);
        } else {
          thunk.dispatch(authActions.setError("invalid login or password!"));
          resolve(null);
        }
      }, 1000);
    });
    thunk.dispatch(authActions.setIsLoading(false));
    return mockUser as IUser;
  } catch (err) {
    return thunk.rejectWithValue("asdasd");
  }
});

export const logout = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; rejectValue: string }
>("auth/logout", async (data, thunk) => {
  thunk.dispatch(authActions.setUser({} as IUser));
  thunk.dispatch(authActions.setAuth(false));
});
