import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "877f343f";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com" }),
  endpoints: (builder) => ({
    getMoviesByTitle: builder.mutation({
      query: ({ query, page }: { query: string; page: number }) => ({
        url: "",
        params: {
          apikey: API_KEY,
          s: query,
          page: page,
        },
      }),
    }),
    getMovieDetails: builder.query({
      query: ({ id }) => ({
        url: "",
        params: {
          apikey: API_KEY,
          i: id,
        },
      }),
    }),
  }),
});

export const { useGetMoviesByTitleMutation, useGetMovieDetailsQuery } =
  moviesApi;
