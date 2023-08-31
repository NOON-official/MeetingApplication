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
    getMyInfo: builder.query({
      query: () => ({ url: `users/my-info` }),
      providesTags: ['Users'],
    }),
    patchUniversity: builder.mutation({
      query({ ...patch }) {
        return {
          url: `users/university`,
          method: 'PATCH',
          body: patch,
        };
      },
      invalidatesTags: ['Users'],
    }),
    postPhoneNumber: builder.mutation({
      query({ ...post }) {
        return {
          url: `auth/phone`,
          method: 'POST',
          body: post,
        };
      },
      invalidatesTags: ['Users'],
    }),
    postPhoneCode: builder.mutation({
      query({ ...post }) {
        return {
          url: `auth/phone/code`,
          method: 'POST',
          body: post,
        };
      },
      invalidatesTags: ['Users'],
    }),
    getAgreements: builder.query({
      query: () => ({ url: `users/agreements` }),
      providesTags: ['Users'],
    }),
    postAgreements: builder.mutation({
      query({ ...post }) {
        return {
          url: `users/agreements`,
          method: 'POST',
          body: post,
        };
      },
      invalidatesTags: ['Users'],
    }),
    getTingCount: builder.query({
      query: () => ({ url: `users/tings/count` }),
      transformResponse: (response) => response.tingCount,
      providesTags: ['Users'],
    }),
    getMyTeamId: builder.query({
      query: () => ({ url: `users/team-id` }),
      transformResponse: (response) => response.teamId,
      providesTags: ['Users'],
    }),
    getMyProfile: builder.query({
      query: (id) => ({ url: `teams/${id}` }),
      providesTags: ['Users'],
    }),
  }),
});

export const {
  useGetMyInfoQuery,
  usePatchUniversityMutation,
  usePostPhoneNumberMutation,
  usePostPhoneCodeMutation,
  useGetAgreementsQuery,
  usePostAgreementsMutation,
  useGetTingCountQuery,
  useGetMyTeamIdQuery,
  useGetMyProfileQuery,
} = userApi;
