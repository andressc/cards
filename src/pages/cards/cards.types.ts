export type CardItem = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type CardsParams = {
  answer?: string
  currentPage?: number
  deckId: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

/*export type CreateDeck = {
  cover?: string
  isPrivate: boolean
  name: string
}

export type UpdateDeck = {
  cover?: string
  id: string
  isPrivate?: boolean
  name?: string
}*/
