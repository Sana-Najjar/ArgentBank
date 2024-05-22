/*import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001`,
    async prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    ping: builder.query({
      query: () => {
        return "/";
      },
    }),
    login: builder.mutation({
      query: (body) => {
        return { url: "api/v1/user/login", method: "POST", body };
      },
    }),
    // createUser: builder.mutation({}),
    // updateUser: builder.mutation({}),
    // profile: builder.query({}),
  })
});

export const {usePingQuery, useLoginMutation} = userApi;*/