import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminForgetPasswordApi = createApi({
  reducerPath: 'adminForgetPasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/'}),
  endpoints: (builder) => ({
    createadminForgetPassword: builder.mutation({
      query: (body) =>({
      url:'forgetpassword/',
      method:'POST',
      body:body,
      headers:{
      'content-type':'application/json',
      }
    })
    }),
    
  }),
})
export const {useCreateadminForgetPasswordMutation} =adminForgetPasswordApi