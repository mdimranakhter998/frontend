import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const applicantSignInApi = createApi({
  reducerPath: 'applicantSignInApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/applicant/'}),
  endpoints: (builder) => ({
    createapplicantSignIn: builder.mutation({
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
export const {useCreateapplicantSignInMutation} =applicantSignInApi