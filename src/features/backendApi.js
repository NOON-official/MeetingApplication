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
    getUserTeams: builder.query({
      query: () => `users/teams`,
    }),
    getUserTicketCount: builder.query({
      query: () => `users/tickets/count`,
    }),
    getUserCoupons: builder.query({
      query: () => `users/coupons`,
    }),
    getUserCouponCount: builder.query({
      query: () => `users/coupons/count`,
    }),
    getUserOrders: builder.query({
      query: () => `users/orders`,
    }),
    getUserInvitationCount: builder.query({
      query: () => `users/invitations/count`,
    }),
    getUserReferralId: builder.query({
      query: () => `users/referral-id`,
    }),
    getOrdersPageData: builder.query({
      query: () => `orders/pagedata`,
    }),
    getCouponsPageData: builder.query({
      query: () => `coupons/pagedata`,
    }),
  }),
});

export const {
  useGetMyInfoQuery,
  useGetUserTeamsQuery,
  useGetUserTicketCountQuery,
  useGetUserCouponsQuery,
  useGetUserCouponCountQuery,
  useGetUserOrdersQuery,
  useGetUserInvitationCountQuery,
  useGetUserReferralIdQuery,
  useGetOrdersPageDataQuery,
  useGetCouponsPageDataQuery,
} = backendApi;
