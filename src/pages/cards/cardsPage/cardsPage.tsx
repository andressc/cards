import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  CreateOrUpdateDeckForm,
  CreateOrUpdateDeckFormValues,
} from '@/components/decks/createOrUpdateDeckForm'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Pagination } from '@/components/ui/pagination'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { CardsTable } from '@/pages/cards/cardsTable/cardsTable'
import { useGetCardsQuery } from '@/services/cards/cards.service'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'

import s from './cardsPage.module.scss'

export const CardsPage = () => {
  const defaultSearchValue = ''

  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState(defaultSearchValue)
  const [isOpenCreateDeck, setIsOpenCreateDeck] = useState(false)
  const [isOpenUpdateDeck, setIsOpenUpdateDeck] = useState(false)
  const [updateDeckId, setUpdateDeckId] = useState('')

  const params = useParams<{ deckId: string }>()

  const {
    data: deckData,
    error: deckError,
    isError: deckIsError,
    isLoading: deckIsLoading,
  } = useGetDeckByIdQuery({
    id: params.deckId ? params.deckId : 'd2a187d3-9dd0-4d68-999f-c19e0944fee1',
  })

  const {
    data: cardData,
    error: cardError,
    isError: cardIsError,
    isLoading: cardIsLoading,
  } = useGetCardsQuery({
    currentPage,
    deckId: params.deckId ? params.deckId : 'd2a187d3-9dd0-4d68-999f-c19e0944fee1',
    itemsPerPage: perPage,
  })

  const [createDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const clearSearchHandler = () => {
    setSearchValue('')
  }

  const createDeckHandler = (formValues: CreateOrUpdateDeckFormValues) => {
    createDeck(formValues)
    closeModalsHandler()
  }

  const updateDeckHandler = (formValues: CreateOrUpdateDeckFormValues) => {
    updateDeck({ id: updateDeckId, ...formValues })
    closeModalsHandler()
  }

  const closeModalsHandler = () => {
    setIsOpenCreateDeck(false)
    setIsOpenUpdateDeck(false)
  }

  const openModalCreateDeckHandler = () => {
    setIsOpenCreateDeck(true)
  }

  const openModalUpdateDeckHandler = (id: string) => {
    setUpdateDeckId(id)
    setIsOpenUpdateDeck(true)
  }

  const setPerPageHandler = (itemPerPage: number | string) => setPerPage(+itemPerPage)

  const deleteDeckHandler = (id: string) => deleteDeck({ id })

  const createDeckModal = (
    <Modal onClose={closeModalsHandler} open={isOpenCreateDeck} title={'Add New Deck'}>
      <CreateOrUpdateDeckForm
        onCloseModal={closeModalsHandler}
        onValueSubmit={createDeckHandler}
        submitButtonTitle={'Add New Pack'}
      />
    </Modal>
  )

  /*const updateDeckModal = (
    <Modal onClose={closeModalsHandler} open={isOpenUpdateDeck} title={'Update Deck'}>
      <CreateOrUpdateDeckForm
        defaultValues={data?.items.find(item => item.id === updateDeckId)}
        onCloseModal={closeModalsHandler}
        onValueSubmit={updateDeckHandler}
        submitButtonTitle={'Update Pack'}
      />
    </Modal>
  )*/

  if (deckIsLoading || cardIsLoading) {
    return <div>Loading</div>
  }

  if (deckIsError || cardIsError) {
    return (
      <div>
        {JSON.stringify(deckError)}
        {JSON.stringify(cardError)}
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '1000px',
      }}
    >
      {createDeckModal}
      {/*{updateDeckModal}*/}
      <div className={s.controlsContainer}>
        <div>
          <Typography variant={'h1'}>{deckData?.name}</Typography>
          <img alt={'image'} src={deckData?.cover} style={{ width: '100px' }} />
        </div>
        <Button onClick={openModalCreateDeckHandler}>Add new deck</Button>
      </div>

      <TextField
        onChange={searchHandler}
        onClearClick={clearSearchHandler}
        search
        value={searchValue}
      />

      <CardsTable
        cards={cardData?.items}
        onDeleteClick={deleteDeckHandler}
        onEditClick={openModalUpdateDeckHandler}
      />
      <Pagination
        count={cardData?.pagination ? cardData.pagination.totalPages : 1}
        onChange={setCurrentPage}
        onPerPageChange={setPerPageHandler}
        page={currentPage}
        perPage={cardData?.pagination ? cardData?.pagination.itemsPerPage : 1}
        perPageOptions={[10, 20, 30, 50, 100]}
      />
    </div>
  )
}
