import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

export const AppRouter = () => {
  const auth = true;
  return auth === true ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route {...route} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
