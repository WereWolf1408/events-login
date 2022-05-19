export interface IAuthState {
  isAuth: boolean;
}

export type SetAuthType = boolean;

export type AuthType = SetAuthType;

//if we have more types it will be looks like
// export type AuthType = SetAuthType | getAuthType | ...
