import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  

   
export const adminChangePasswordApi = createApi({
  reducerPath: 'adminChangePasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/'}),
  endpoints: (builder) => ({
    createadminChangePassword: builder.mutation({
      query: (body,access) =>({
      url:'changepassword/',
      method:'POST',     
      body:body,
      headers:{     
      'authorization':`Bearer ${body.access}`,
      'content-type':'application/json',
      }
    })
    }),
    
  }),
})
export const {useCreateadminChangePasswordMutation} =adminChangePasswordApi