import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  IAuthState,
  SetAuthType,
  SetErrorType,
  SetIsLoadingType,
  SetUserType,
} from "./types";

const setAuth: CaseReducer<IAuthState, PayloadAction<SetAuthType>> = (
  state,
  action
) => {
  state.isAuth = action.payload;
};

const setError: CaseReducer<IAuthState, PayloadAction<SetErrorType>> = (
  state,
  action
) => {
  state.error = action.payload;
};

const setUser: CaseReducer<IAuthState, PayloadAction<SetUserType>> = (
  state,
  action
) => {
  state.user = action.payload;
};

const setIsLoading: CaseReducer<IAuthState, PayloadAction<SetIsLoadingType>> = (
  state,
  action
) => {
  state.isLoading = action.payload;
};

export const caseReducer = {
  setAuth,
  setError,
  setUser,
  setIsLoading,
};
