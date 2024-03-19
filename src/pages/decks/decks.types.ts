export type Decks = {
  items: DecksItem[]
  pagination: DecksPagination
}
export type DecksItemsAuthor = {
  id: string
  name: string
}
export type DecksItem = {
  author: DecksItemsAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type DecksPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type DecksParams = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?:
    | 'author.name-asc'
    | 'author.name-desc'
    | 'cardsCount-asc'
    | 'cardsCount-desc'
    | 'created-asc'
    | 'created-desc'
    | 'name-asc'
    | 'name-desc'
    | 'updated-asc'
    | 'updated-desc'
    | null
}

export type AddDeck = {
  cover?: string
  isPrivate: boolean
  name: string
}
