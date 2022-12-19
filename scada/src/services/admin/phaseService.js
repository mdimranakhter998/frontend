import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const phaseApi = createApi({
  reducerPath: 'phaseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["phase"],
  endpoints: (builder) => ({
    createphase: builder.mutation({
      query: (body) =>({
      url:'phase/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["phase"],
    }),
    listphase: builder.query({
        query: () =>({
        url:'phase/',
        method:'GET',
      
      }),
      providesTags:["phase"],
    }),
    getByIdphase: builder.query({
        query: (id) =>({       
        url:`phase/${id}`,
        method:'GET',       
    }),
    providesTags:["phase"],
   
    }),
    updatephase: builder.mutation({
        query: (body) =>({
        url:`phase/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["phase"],
       
      }),
    deletephase: builder.mutation({
        query: (id) =>({
        url:`phase/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["phase"],
      
      }),
   
  }),
})
export const {useCreatephaseMutation,useGetByIdphaseQuery,useListphaseQuery,useUpdatephaseMutation,useDeletephaseMutation} =phaseApi