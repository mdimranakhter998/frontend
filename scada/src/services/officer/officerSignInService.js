import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const officerSignInApi = createApi({
  reducerPath: 'officerSignInApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/officer/'}),
  endpoints: (builder) => ({
    createofficerSignIn: builder.mutation({
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
export const {useCreateofficerSignInMutation} =officerSignInApi