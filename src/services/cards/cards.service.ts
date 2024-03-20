import { CardItem, CardsParams } from '@/pages/cards/cards.types'
import { ResponseData } from '@/pages/types'
import { baseApi } from '@/services/baseApi'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCards: builder.query<ResponseData<CardItem>, CardsParams>({
        providesTags: ['Deck'],
        query: ({ deckId, ...params }) => ({
          params: params ?? undefined,
          url: `v1/decks/${deckId}/cards`,
        }),
      }),
    }
  },
})

export const { useGetCardsQuery } = cardsService
