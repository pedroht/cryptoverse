import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': process.env.RAPIDAPI_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (id) => createRequest(`/coin/${id}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ id, timePeriod }) => createRequest(`/coin/${id}/history?timePeriod=${timePeriod}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchange/-zdvbieRdZ/coins`)
    })
  })
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi;