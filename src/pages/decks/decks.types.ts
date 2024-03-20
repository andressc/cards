export type DeckItemAuthor = {
  id: string
  name: string
}
export type DeckItem = {
  author: DeckItemAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
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

export type CreateDeck = {
  cover?: string
  isPrivate: boolean
  name: string
}

export type UpdateDeck = {
  cover?: string
  id: string
  isPrivate?: boolean
  name?: string
}
