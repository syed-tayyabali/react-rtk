import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface shop {
    name: string
    id: string
}

interface singleItem {
    name: string
    description: string
    images: {
        showcase: string
    }
}

export const shopApiSlice = createApi({
    reducerPath: 'shopApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fortnite-api.com/v1' }),
    endpoints: (builder) => ({
        fetchFortnitePlaylist: builder.query<shop[], void>({
            query: () => `/playlists`,
            transformResponse: (response: { data: shop[] }) => response.data
        }),
        fetchPlaylist: builder.query<singleItem[], string | void>({
            query: (id) => `/playlists/${id}`,
            transformResponse: (response: { data: singleItem[] }) => response.data
        })
    })
})

export const { useFetchFortnitePlaylistQuery, useFetchPlaylistQuery } = shopApiSlice;