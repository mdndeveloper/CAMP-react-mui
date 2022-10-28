import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configData from '../../config.json';
import { getAuthUserId } from '../../utils/auth';
import { getToken } from '../../utils/token';

export const configApiSlice = createApi({
  reducerPath: 'configApi',
  refetchOnMountOrArgChange: true,
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
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          if (data.length === 0) {
            const configData = {
              userId: getAuthUserId(),
              cameraDisplay: 'string',
              checkInMessage: '- is here to play!',
              checkInSound: '3beeps',
              checkInDuration: 0,
              checkOutMessage: '- is going home!',
              checkOutSound: '3beeps',
              checkOutDuration: 0,
              interviewMessage: '- is interviewing!',
              interviewSound: '3beeps',
              interviewDuration: 0,
              generalSound: '3beeps',
              scheduledSound: '3beeps',
              defaultDuration: 0,
              slideShowPosition: 'bottom',
            };
            dispatch(configApiSlice.endpoints.addConfig.initiate(configData));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getConfig: builder.query({
      query: (userId) => `/user-config/?userId=${userId}`,
      providesTags: (result, error, arg) => [{ type: 'Config', id: arg }],
    }),
    addConfig: builder.mutation({
      query: (data) => ({
        url: `/user-config/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => ['Configs'],
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
  useGetConfigsQuery,
  useUpdateConfigMutation,
  useAddConfigMutation,
} = configApiSlice;
