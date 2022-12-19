import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["service"],
  endpoints: (builder) => ({
    createservice: builder.mutation({
      query: (body) =>({
      url:'service/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["service"],
    }),
    listservice: builder.query({
        query: () =>({
        url:'service/',
        method:'GET',
      
      }),
      providesTags:["service"],
    }),
    getByIdservice: builder.query({
        query: (id) =>({       
        url:`service/${id}`,
        method:'GET',       
    }),
    providesTags:["service"],
   
    }),
    updateservice: builder.mutation({
        query: (body) =>({
        url:`service/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["service"],
       
      }),
    deleteservice: builder.mutation({
        query: (id) =>({
        url:`service/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["service"],
      
      }),
   
  }),
})
export const {useCreateserviceMutation,useGetByIdserviceQuery,useListserviceQuery,useUpdateserviceMutation,useDeleteserviceMutation} =serviceApi