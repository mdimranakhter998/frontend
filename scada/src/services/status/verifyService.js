import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const verifyApi = createApi({
  reducerPath: 'verifyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/officer/'}),
  tagTypes:["verify"],
  endpoints: (builder) => ({
    createverify: builder.mutation({
      query: (body) =>({
      url:'verify/',
      method:'POST',
      body:body,
     
    }),
    invalidatesTags:["verify"],
    }),
    listverify: builder.query({
        query: () =>({
        url:'verify/',
        method:'GET'
      }),
      providesTags:["verify"],
    }),
    getByIdverify: builder.query({
        query: (id) =>({
        url:`verify/${id}`,
        method:'GET',       
    }),
    providesTags:["verify"],
    }),
    updateverify: builder.mutation({
        query: (body) =>({
        url:`verify/${body.get("id")}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["verify"],
      }),
    deleteverify: builder.mutation({
        query: (id) =>({
        url:`verify/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["verify"],
      }),
      
  }),
})
export const {useCreateverifyMutation,useListverifyQuery,useGetByIdverifyQuery,useUpdateverifyMutation,useDeleteverifyMutation} =verifyApi