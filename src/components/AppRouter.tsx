import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/usedTypedSelected";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

export const AppRouter = () => {
  const { auth: isAuth } = useTypedSelector((state) => state);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.EVENT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};
