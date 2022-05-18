import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { auth } from "./reducers";

export const store = configureStore({
  reducer: { auth },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
