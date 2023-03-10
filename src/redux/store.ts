// @ts-nocheck

import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
