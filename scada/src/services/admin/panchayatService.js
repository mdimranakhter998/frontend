import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const panchayatApi = createApi({
  reducerPath: 'panchayatApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin'}),
  tagTypes:["panchayat"],
  endpoints: (builder) => ({
    createpanchayat: builder.mutation({
      query: (body) =>({
      url:'panchayat/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["panchayat"],
    }),
    listpanchayat: builder.query({
        query: () =>({
        url:'panchayat/',
        method:'GET'
      }),
      providesTags:["panchayat"],
    }),
    getByIdpanchayat: builder.query({
        query: (id) =>({
        url:`panchayat/${id}`,
        method:'GET',
       
    }),
    providesTags:["panchayat"],
    }),
    updatepanchayat: builder.mutation({
        query: (body) =>({
        url:`panchayat/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["panchayat"],
      }),
    deletepanchayat: builder.mutation({
        query: (id) =>({
        url:`panchayat/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["panchayat"],
      }),
  }),
})
export const {useCreatepanchayatMutation,useListpanchayatQuery,useGetByIdpanchayatQuery,useUpdatepanchayatMutation,useDeletepanchayatMutation} =panchayatApi