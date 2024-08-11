import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'dqBoxApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`,
        }),
    }),
});

export const { useGetPostsQuery } = apiSlice;