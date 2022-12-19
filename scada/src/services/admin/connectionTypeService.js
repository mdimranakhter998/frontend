import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const connectiontypeApi = createApi({
  reducerPath: 'connectiontypeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["connectiontype"],
  endpoints: (builder) => ({
    createconnectiontype: builder.mutation({
      query: (body) =>({
      url:'connectiontype/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["connectiontype"],
    }),
    listconnectiontype: builder.query({
        query: () =>({
        url:'connectiontype/',
        method:'GET',
      
      }),
      providesTags:["connectiontype"],
    }),
    getByIdconnectiontype: builder.query({
        query: (id) =>({       
        url:`connectiontype/${id}`,
        method:'GET',       
    }),
    providesTags:["connectiontype"],
   
    }),
    updateconnectiontype: builder.mutation({
        query: (body) =>({
        url:`connectiontype/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["connectiontype"],
       
      }),
    deleteconnectiontype: builder.mutation({
        query: (id) =>({
        url:`connectiontype/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["connectiontype"],
      
      }),
   
  }),
})
export const {useCreateconnectiontypeMutation,useGetByIdconnectiontypeQuery,useListconnectiontypeQuery,useUpdateconnectiontypeMutation,useDeleteconnectiontypeMutation} =connectiontypeApi