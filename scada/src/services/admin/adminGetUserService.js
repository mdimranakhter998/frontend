import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminGetUserApi = createApi({
  reducerPath: 'adminGetUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin/'}),
  tagTypes:["adminGetUser"],
  endpoints: (builder) => ({
   
    listadminGetUser: builder.query({
        query: (token) =>({
        url:'getuser/',
        method:'GET',
        headers:{
            'authorization':`Bearer ${token}`
        }

      }),
      invalidatesTags:["adminGetUser"],
    }),
    
    
  }),
})
export const {useListadminGetUserQuery} =adminGetUserApi