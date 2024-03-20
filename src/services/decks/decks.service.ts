import { CreateDeck, DeckItem, DecksParams, UpdateDeck } from '@/pages/decks/decks.types'
import { ResponseData } from '@/pages/types'
import { baseApi } from '@/services/baseApi'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<DeckItem, CreateDeck>({
        invalidatesTags: ['Decks', 'Deck'],
        query: params => ({
          body: params,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<DeckItem, { id: string }>({
        invalidatesTags: ['Decks'],
        query: params => ({
          method: 'DELETE',
          url: `v1/decks/${params.id}`,
        }),
      }),
      getDeckById: builder.query<DeckItem, { id: string }>({
        providesTags: ['Decks'],
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<ResponseData<DeckItem>, DecksParams | void>({
        providesTags: ['Deck'],
        query: params => ({
          params: params ?? undefined,
          url: `v1/decks`,
        }),
      }),
      updateDeck: builder.mutation<DeckItem, UpdateDeck>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...params }) => ({
          body: params,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
