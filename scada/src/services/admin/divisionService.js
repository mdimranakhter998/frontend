import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const divisionApi = createApi({
  reducerPath: 'divisionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["division"],
  endpoints: (builder) => ({
    createdivision: builder.mutation({
      query: (body) =>({
      url:'division/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["division"],
    }),
    listdivision: builder.query({
        query: () =>({
        url:'division/',
        method:'GET'
      }),
      providesTags:["division"],
    }),
    getByIddivision: builder.query({
        query: (id) =>({
        url:`division/${id}`,
        method:'GET',       
    }),
    providesTags:["division"],
    }),
    updatedivision: builder.mutation({
        query: (body) =>({
        url:`division/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["division"],
      }),
    deletedivision: builder.mutation({
        query: (id) =>({
        url:`division/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["division"],
      }),
  }),
})
export const {useCreatedivisionMutation,useListdivisionQuery,useGetByIddivisionQuery,useUpdatedivisionMutation,useDeletedivisionMutation} =divisionApi