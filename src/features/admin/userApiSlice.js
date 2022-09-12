import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configData from '../../config.json';
import { getAuthUserId } from '../../utils/auth';
import { getToken } from '../../utils/token';

export const userApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configData.SERVER_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      headers.set('Authorization', token ? `Bearer ${token}` : '');
      headers.set('userid', getAuthUserId());
      return headers;
    },
  }),
  tagTypes: ['Users', 'User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      keepUnusedDataFor: 60,
      providesTags: ['Users'],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: '/users',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Users'],
    }),
    editUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        'Users',
        { type: 'User', id: arg.id },
      ],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApiSlice;
