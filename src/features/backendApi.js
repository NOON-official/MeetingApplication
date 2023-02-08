import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL, STORAGE_KEY_ACCESS_TOKEN } from '../config/constants';

export const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMyInfo: builder.query({
      query: () => `users/my-info`,
    }),
    getTeams: builder.query({
      query: () => `users/teams`,
    }),
    getTicketCount: builder.query({
      query: () => `users/tickets/count`,
    }),
    getCoupons: builder.query({
      query: () => `users/coupons`,
    }),
    getCouponCount: builder.query({
      query: () => `users/coupons/count`,
    }),
    getOrdersPageData: builder.query({
      query: () => `orders/pagedata`,
    }),
  }),
});

export const {
  useGetMyInfoQuery,
  useGetTeamsQuery,
  useGetTicketCountQuery,
  useGetCouponsQuery,
  useGetCouponCountQuery,
  useGetOrdersPageDataQuery,
} = backendApi;
