import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configData from '../../config.json';
import { getAuthUserId } from '../../utils/auth';
import { getToken } from '../../utils/token';

export const userElementApiSlice = createApi({
  reducerPath: 'userElementApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configData.SERVER_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      headers.set('Authorization', token ? `Bearer ${token}` : '');
      headers.set('userid', getAuthUserId());
      return headers;
    },
  }),
  tagTypes: ['Elements', 'Element'],
  endpoints: (builder) => ({
    getElements: builder.query({
      query: () => '/user-elements',
      keepUnusedDataFor: 60,
      providesTags: ['Elements'],
    }),
    getElement: builder.query({
      query: (id) => `/user-elements/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Element', id: arg }],
    }),
    addElement: builder.mutation({
      query: (data) => ({
        url: `/user-elements/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        'Elements',
        { type: 'Element', id: arg.id },
      ],
    }),
    deleteElement: builder.mutation({
      query: (id) => ({
        url: `/user-elements/${id}`,
        method: 'delete',
      }),
      invalidatesTags: (result, error, arg) => [
        'Elements',
        { type: 'Element', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetElementQuery,
  useGetElementsQuery,
  useAddElementMutation,
  useDeleteElementMutation,
} = userElementApiSlice;
