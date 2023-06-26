import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    // baseUrl: 'https://backendpf-production-b9df.up.railway.app/',
  }),
  endpoints: (builder) => ({}),
});

export const {} = productsApi;
