import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sectionApi = createApi({
  reducerPath: 'sectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin'}),
  tagTypes:["section"],
  endpoints: (builder) => ({
    createsection: builder.mutation({
      query: (body) =>({
      url:'section/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["section"],
    }),
    listsection: builder.query({
        query: () =>({
        url:'section/',
        method:'GET'
      }),
      providesTags:["section"],
    }),
    getByIdsection: builder.query({
        query: (id) =>({
        url:`section/${id}`,
        method:'GET',       
    }),
    providesTags:["section"],
    }),
    updatesection: builder.mutation({
        query: (body) =>({
        url:`section/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["section"],
      }),
    deletesection: builder.mutation({
        query: (id) =>({
        url:`section/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["section"],
      })
  }),
})
export const {useCreatesectionMutation,useListsectionQuery,useGetByIdsectionQuery,useUpdatesectionMutation,useDeletesectionMutation} =sectionApi