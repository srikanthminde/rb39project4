import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:7777'}),
  endpoints: (builder) => ({
    user: builder.query({
        url:"/",
      mutation:()=> `/leadsApi`,
    }),
  }),
})
export const {useUserQuery}=leadsApi
