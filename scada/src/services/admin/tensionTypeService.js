import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tensiontypeApi = createApi({
  reducerPath: 'tensiontypeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["tensiontype"],
  endpoints: (builder) => ({
    createtensiontype: builder.mutation({
      query: (body) =>({
      url:'tensiontype/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["tensiontype"],
    }),
    listtensiontype: builder.query({
        query: () =>({
        url:'tensiontype/',
        method:'GET',
      
      }),
      providesTags:["tensiontype"],
    }),
    getByIdtensiontype: builder.query({
        query: (id) =>({       
        url:`tensiontype/${id}`,
        method:'GET',       
    }),
    providesTags:["tensiontype"],
   
    }),
    updatetensiontype: builder.mutation({
        query: (body) =>({
        url:`tensiontype/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["tensiontype"],
       
      }),
    deletetensiontype: builder.mutation({
        query: (id) =>({
        url:`tensiontype/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["tensiontype"],
      
      }),
   
  }),
})
export const {useCreatetensiontypeMutation,useGetByIdtensiontypeQuery,useListtensiontypeQuery,useUpdatetensiontypeMutation,useDeletetensiontypeMutation} =tensiontypeApi