import { IUser } from "../../../models/IUser";

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export type SetAuthType = boolean;
export type SetUserType = IUser;
export type SetIsLoadingType = boolean;
export type SetErrorType = string;

//if we have more types it will be looks like
// export type AuthType = SetAuthType | getAuthType | ...
