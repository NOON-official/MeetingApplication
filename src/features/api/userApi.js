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
  tagTypes: ['Users', 'Apply'],
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
      providesTags: ['Ting'],
    }),
    getMyTeamId: builder.query({
      query: () => ({ url: `users/team-id` }),
      transformResponse: (response) => response.teamId,
      providesTags: ['Team'],
    }),
    getProfile: builder.query({
      query: (id) => ({ url: `teams/${id}` }),
      providesTags: ['Team'],
    }),
    getRecommendList: builder.query({
      query: () => ({ url: `users/teams/recommended` }),
      transformResponse: (response) => response.teams,
      providesTags: ['Team'],
    }),
    getApplyData: builder.query({
      query: () => ({ url: `users/matchings/applied` }),
      transformResponse: (response) => response.teams,
      providesTags: ['Apply'],
    }),
    getRefusedData: builder.query({
      query: () => ({ url: `users/matchings/refused` }),
      transformResponse: (response) => response.teams,
      providesTags: ['Refused'],
    }),
    getReceivedData: builder.query({
      query: () => ({ url: `users/matchings/received` }),
      transformResponse: (response) => response.teams,
      providesTags: ['Received'],
    }),
    getSucceedData: builder.query({
      query: () => ({ url: `users/matchings/succeeded` }),
      transformResponse: (response) => response.teams,
      providesTags: ['Succeed'],
    }),
    deleteApplyProfile: builder.mutation({
      query({ ...data }) {
        return {
          url: `users/matchings/applied`,
          method: 'DELETE',
          body: data,
        };
      },
      invalidatesTags: ['Apply'],
    }),
    deleteReceivedProfile: builder.mutation({
      query({ ...data }) {
        return {
          url: `users/matchings/received`,
          method: 'DELETE',
          body: data,
        };
      },
      invalidatesTags: ['Received'],
    }),
    postApplyMatching: builder.mutation({
      query({ myTeamId, teamId }) {
        return {
          url: `matchings/${myTeamId}/${teamId}`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Team', 'Apply'],
    }),
    putStopSeeProfile: builder.mutation({
      query({ teamId }) {
        return {
          url: `teams/${teamId}`,
          method: 'PUT',
        };
      },
      invalidatesTags: ['Team'],
    }),
    putAcceptMatching: builder.mutation({
      query({ matchingId, teamId }) {
        return {
          url: `matchings/${matchingId}/teams/${teamId}/accept`,
          method: 'PUT',
        };
      },
      invalidatesTags: ['Received'],
    }),
    putRefuseMatching: builder.mutation({
      query({ matchingId, teamId }) {
        return {
          url: `matchings/${matchingId}/teams/${teamId}/refuse`,
          method: 'PUT',
        };
      },
      invalidatesTags: ['Matching'],
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
  useGetProfileQuery,
  useGetRecommendListQuery,
  useGetApplyDataQuery,
  useGetRefusedDataQuery,
  useGetReceivedDataQuery,
  useGetSucceedDataQuery,
  useDeleteApplyProfileMutation,
  useDeleteReceivedProfileMutation,
  usePostApplyMatchingMutation,
  usePutStopSeeProfileMutation,
  usePutAcceptMatchingMutation,
  usePutRefuseMatchingMutation,
} = userApi;
