import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blockApi = createApi({
  reducerPath: 'blockApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["block"],
  endpoints: (builder) => ({
    createblock: builder.mutation({
      query: (body) =>({
      url:'block/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["block"],
    }),
    listblock: builder.query({
        query: () =>({
        url:'block/',
        method:'GET'
      }),
      providesTags:["block"],
    }),
    getByIdblock: builder.query({
        query: (id) =>({
        url:`block/${id}`,
        method:'GET',
       
    }),
    providesTags:["block"],
    }),
    updateblock: builder.mutation({
        query: (body) =>({
        url:`block/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["block"],
      }),
    deleteblock: builder.mutation({
        query: (id) =>({
        url:`block/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["block"],
      })
  }),
})
export const {useCreateblockMutation,useListblockQuery,useGetByIdblockQuery,useUpdateblockMutation,useDeleteblockMutation} =blockApi