import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminSignInApi = createApi({
  reducerPath: 'adminSignInApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  endpoints: (builder) => ({
    createadminSignIn: builder.mutation({
      query: (body) =>({
      url:'signin/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    })
    }),
    
  }),
})
export const {useCreateadminSignInMutation} =adminSignInApi