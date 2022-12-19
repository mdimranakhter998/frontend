import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tariffApi = createApi({
  reducerPath: 'tariffApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["tariff"],
  endpoints: (builder) => ({
    createtariff: builder.mutation({
      query: (body) =>({
      url:'tariff/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["tariff"],
    }),
    listtariff: builder.query({
        query: () =>({
        url:'tariff/',
        method:'GET',
      
      }),
      providesTags:["tariff"],
    }),
    getByIdtariff: builder.query({
        query: (id) =>({       
        url:`tariff/${id}`,
        method:'GET',       
    }),
    providesTags:["tariff"],
   
    }),
    updatetariff: builder.mutation({
        query: (body) =>({
        url:`tariff/${body.id}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["tariff"],
       
      }),
    deletetariff: builder.mutation({
        query: (id) =>({
        url:`tariff/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["tariff"],
      
      }),
   
  }),
})
export const {useCreatetariffMutation,useGetByIdtariffQuery,useListtariffQuery,useUpdatetariffMutation,useDeletetariffMutation} =tariffApi