import { AddDeck, Decks, DecksItem, DecksParams } from '@/pages/decks/decks.types'
import { baseApi } from '@/services/baseApi'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<DecksItem, AddDeck>({
        invalidatesTags: ['Decks'],
        query: params => ({
          body: params,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<DecksItem, { id: string }>({
        invalidatesTags: ['Decks'],
        query: params => ({
          method: 'DELETE',
          url: `v1/decks/${params.id}`,
        }),
      }),
      getDecks: builder.query<Decks, DecksParams | void>({
        providesTags: ['Decks'],
        query: params => ({
          params: params ?? undefined,
          url: `v1/decks`,
        }),
      }),
    }
  },
})

export const { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } = decksService
