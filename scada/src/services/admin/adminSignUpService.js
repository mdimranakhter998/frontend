import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminSignUpApi = createApi({
  reducerPath: 'adminSignUpApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["adminSignUp"],
  endpoints: (builder) => ({
    createadminSignUp: builder.mutation({
      query: (body) =>({
      url:'signup/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    }),
    invalidatesTags:["adminSignUp"],
    }),
    listadminSignUp: builder.query({
        query: () =>({
        url:'signup/',
        method:'GET'
      }),
      providesTags:["adminSignUp"],
    }),
    getByIdadminSignUp: builder.query({
        query: (id) =>({
        url:`signup/${id}/`,
        method:'GET',       
    }),
    providesTags:["adminSignUp"],
    }),
    updateadminSignUp: builder.mutation({
        query: (body) =>({
        url:`signup/${body.get('id')}/`,
        method:"PATCH",
        body:body
        }),
        invalidatesTags:["adminSignUp"],
      }),
    deleteadminSignUp: builder.mutation({
        query: (id) =>({
        url:`signup/${id}/`,
        method:"DELETE"
        }),
        invalidatesTags:["adminSignUp"],
      }),
      listadminGetUser: builder.query({
        query: (token) =>({
        url:'getuser/',
        method:'GET',
        headers:{
            'authorization':`Bearer ${token}`
        }

      }),
      providesTags:["adminSignUp"],
    }),
    
  }),
})
export const {useCreateadminSignUpMutation,useListadminSignUpQuery,useGetByIdadminSignUpQuery,useUpdateadminSignUpMutation,useDeleteadminSignUpMutation,useListadminGetUserQuery} =adminSignUpApi