import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configData from '../../config.json';
import { getAuthUserId } from '../../utils/auth';
import { getToken } from '../../utils/token';

export const configApiSlice = createApi({
  reducerPath: 'configApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configData.SERVER_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      headers.set('Authorization', token ? `Bearer ${token}` : '');
      headers.set('userid', getAuthUserId());
      return headers;
    },
  }),
  tagTypes: ['Configs', 'Config'],
  endpoints: (builder) => ({
    getConfigs: builder.query({
      query: () => '/user-config',
      keepUnusedDataFor: 60,
      providesTags: ['Configs'],
    }),
    getConfig: builder.query({
      query: (userId) => `/user-config/?userId=${userId}`,
      providesTags: (result, error, arg) => [{ type: 'Config', id: arg }],
    }),
    updateConfig: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user-config/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        'Configs',
        { type: 'Config', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetConfigQuery,
  useGetConfigsQuery,
  useUpdateConfigMutation,
} = configApiSlice;
