import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loadApi = createApi({
  reducerPath: 'loadApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["load"],
  endpoints: (builder) => ({
    createload: builder.mutation({
      query: (body) =>({
      url:'load/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["load"],
    }),
    listload: builder.query({
        query: () =>({
        url:'load/',
        method:'GET',
      
      }),
      providesTags:["load"],
    }),
    getByIdload: builder.query({
        query: (id) =>({       
        url:`load/${id}`,
        method:'GET',       
    }),
    providesTags:["load"],
   
    }),
    updateload: builder.mutation({
        query: (body) =>({
        url:`load/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["load"],
       
      }),
    deleteload: builder.mutation({
        query: (id) =>({
        url:`load/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["load"],
      
      }),
   
  }),
})
export const {useCreateloadMutation,useGetByIdloadQuery,useListloadQuery,useUpdateloadMutation,useDeleteloadMutation} =loadApi