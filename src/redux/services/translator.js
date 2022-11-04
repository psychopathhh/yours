import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const translatorApi = createApi({
    reducerPath: 'translatorApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://microsoft-translator-text.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3a23e27febmsha60912837278edcp13c984jsna5d698b1d8b6')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTranslation: builder.query({ query: countryCode => `/charts/country?country_code=${countryCode}` })
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongsRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi