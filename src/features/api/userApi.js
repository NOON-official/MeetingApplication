import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, STORAGE_KEY_ACCESS_TOKEN } from '../../config/constants';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUserReferralId: builder.query({
      query: () => ({ url: `users/referral-id` }),
      providesTags: ['Users'],
    }),
    getMyInfo: builder.query({
      query: () => ({ url: `users/my-info` }),
      providesTags: ['Users'],
    }),
    getUserTingCount: builder.query({
      query: () => ({ url: `users/tings/count` }),
      providesTags: ['Users'],
    }),
    getUserAgreements: builder.query({
      query: () => ({ url: `users/agreements` }),
      providesTags: ['Users'],
    }),
    getUserOrders: builder.query({
      query: () => ({ url: `users/orders` }),
      providesTags: ['Users'],
    }),
    getUserTeamIdData: builder.query({
      query: () => ({ url: `users/team-id` }),
      providesTags: ['Users'],
    }),
    getUserRecommend: builder.query({
      query: () => ({ url: `users/teams/recommended` }),
      providesTags: ['Users'],
    }),
    getUserMatchingApplied: builder.query({
      query: () => ({ url: `users/matchings/applied` }),
      providesTags: ['Users'],
    }),
    getUserMatchingReceived: builder.query({
      query: () => ({ url: `users/matchings/received` }),
      providesTags: ['Users'],
    }),
    getUserMatchingSucceed: builder.query({
      query: () => ({ url: `users/matchings/secceeded` }),
      providesTags: ['Users'],
    }),
    getUserCoupons: builder.query({
      query: () => ({ url: `users/coupons` }),
      providesTags: ['Users'],
    }),
    deleteUserApplied: builder.query({
      query: () => ({
        url: `users/matchings/applied`,
      }),
    }),

    getUserTicketCount: builder.query({
      query: () => `users/tickets/count`,
    }),
    getUserCouponCount: builder.query({
      query: () => `users/coupons/count`,
    }),
    getUserInvitationCount: builder.query({
      query: () => `users/invitations/count`,
    }),
    getOrdersPageData: builder.query({
      query: () => `orders/pagedata`,
    }),
  }),
});

export const {
  useGetUserReferralIdQuery,
  useGetMyInfoQuery,
  useGetUserTingCountQuery,
  useGetUserAgreementsQuery,
  useGetUserOrdersQuery,
  useGetUserTeamIdDataQuery,
  useGetUserRecommendQuery,
  useGetUserMatchingAppliedQuery,
  useGetUserMatchingReceivedQuery,
  useGetUserMatchingSucceedQuery,

  useGetUserTeamsQuery,
  useGetUserTicketCountQuery,
  useGetUserCouponsQuery,
  useGetUserCouponCountQuery,
  useGetUserInvitationCountQuery,
  useGetOrdersPageDataQuery,
  useGetCouponsPageDataQuery,
  useGetTeamMembersCountOneWeekQuery,
  useGetTeamMembersCountTotalQuery,
  useGetTeamCountQuery,
} = userApi;
