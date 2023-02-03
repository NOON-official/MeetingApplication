import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL }),
  endpoints: (builder) => ({
    getPageData: builder.query({
      query: () => `orders/pagedata`,
    }),
  }),
});

export const { useGetPageDataQuery } = ticketApi;
