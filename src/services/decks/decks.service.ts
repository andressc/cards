import { baseApi } from '@/services/baseApi'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<any, void>({
        query: () => `v1/decks`,
      }),
    }
  },
})

export const { useGetDecksQuery } = decksService
