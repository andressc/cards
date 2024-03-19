import { Decks, DecksParams } from '@/pages/decks/decks.types'
import { baseApi } from '@/services/baseApi'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<Decks, DecksParams | void>({
        query: params => ({
          params: params ?? undefined,
          url: `v1/decks`,
        }),
      }),
    }
  },
})

export const { useGetDecksQuery } = decksService
