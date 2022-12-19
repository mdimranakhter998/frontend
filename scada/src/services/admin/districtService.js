import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const districtApi = createApi({
  reducerPath: 'districtApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["district"],
  endpoints: (builder) => ({
    createdistrict: builder.mutation({
      query: (body) =>({
      url:'district/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["district"],
    }),
    listdistrict: builder.query({
        query: () =>({
        url:'district/',
        method:'GET',
      
      }),
      providesTags:["district"],
    }),
    getByIddistrict: builder.query({
        query: (id) =>({       
        url:`district/${id}`,
        method:'GET',       
    }),
    providesTags:["district"],
   
    }),
    updatedistrict: builder.mutation({
        query: (body) =>({
        url:`district/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["district"],
       
      }),
    deletedistrict: builder.mutation({
        query: (id) =>({
        url:`district/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["district"],
      
      }),
   
  }),
})
export const {useCreatedistrictMutation,useGetByIddistrictQuery,useListdistrictQuery,useUpdatedistrictMutation,useDeletedistrictMutation} =districtApi