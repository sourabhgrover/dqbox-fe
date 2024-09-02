import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'dqBoxApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`,
        }),
        getDQKPI: builder.query({
           query: () => `dqKpi`, 
        }),
        getBlobs: builder.query({
            query: () => `blobs`,
        }),
        uploadFile : builder.mutation({
            query: (file) => ({
                url: `blobs/upload`,
                method: 'POST',
                body: file,
            }),
        }),
        getFileSchemaByName: builder.query({
            query: (fileName) => `blobs/read-xlsx/${fileName}`,
        }), 
    }),
});

export const { useGetPostsQuery , useGetDQKPIQuery , useGetBlobsQuery , useUploadFileMutation , useGetFileSchemaByNameQuery} = apiSlice;