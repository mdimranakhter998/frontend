import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const villageApi = createApi({
  reducerPath: 'villageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["village"],
  endpoints: (builder) => ({
    createvillage: builder.mutation({
      query: (body) =>({
      url:'village/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["village"],
    }),
    listvillage: builder.query({
        query: () =>({
        url:'village/',
        method:'GET'
      }),
      providesTags:["village"],
    }),
    getByIdvillage: builder.query({
        query: (id) =>({
        url:`village/${id}`,
        method:'GET',       
    }),
    providesTags:["village"],
    }),
    updatevillage: builder.mutation({
        query: (body) =>({
        url:`village/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["village"],
      }),
    deletevillage: builder.mutation({
        query: (id) =>({
        url:`village/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["village"],
      }),
  }),
})
export const {useCreatevillageMutation,useListvillageQuery,useGetByIdvillageQuery,useUpdatevillageMutation,useDeletevillageMutation} =villageApi