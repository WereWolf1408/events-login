import Login from "../pages/Login";
import Event from "../pages/Event";
import { ReactElement } from "react";

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export interface IRoutes {
  path: string;
  component: ReactElement;
  exact?: boolean;
}

export const publicRoutes: IRoutes[] = [
  { path: RouteNames.LOGIN, exact: true, component: <Login /> },
];
export const privateRoutes: IRoutes[] = [
  { path: RouteNames.EVENT, exact: true, component: <Event /> },
];
