import { ChangeEvent, useState } from 'react'

import TrashOutlinedIcon from '@/assets/icons/components/TrashOutlinedIcon'
import {
  CreateOrUpdateDeckForm,
  CreateOrUpdateDeckFormValues,
} from '@/components/decks/createOrUpdateDeckForm'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { Tabs } from '@/components/ui/tabs'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { DecksTable } from '@/pages/decks/decksTable/decksTable'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'

import s from './decksPage.module.scss'

export const DecksPage = () => {
  const defaultSliderValue = [0, 20]
  const defaultSearchValue = ''
  const defaultTabsValue = ''

  const tabs = [
    {
      title: 'My Cards',
      value: 'ca8815d7-72ec-4e7b-8df7-e5a253e2d17b',
    },
    {
      title: 'All Cards',
      value: '',
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [sliderValue, setSliderValue] = useState(defaultSliderValue)
  const [tabsValue, setTabsValue] = useState(defaultTabsValue)
  const [searchValue, setSearchValue] = useState(defaultSearchValue)
  const [isOpenCreateDeck, setIsOpenCreateDeck] = useState(false)
  const [isOpenUpdateDeck, setIsOpenUpdateDeck] = useState(false)
  const [updateDeckId, setUpdateDeckId] = useState('')

  const clearFilter = () => {
    setSearchValue(defaultSearchValue)
    setSliderValue(defaultSliderValue)
    setTabsValue(defaultTabsValue)
  }

  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: tabsValue,
    currentPage,
    itemsPerPage: perPage,
    maxCardsCount: sliderValue[1],
    minCardsCount: sliderValue[0],
    name: searchValue,
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

  const setSliderValueHandler = (newValue: number[]) => {
    setSliderValue(newValue)
  }

  const setTabsValueHandler = (value: string) => setTabsValue(value)

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

  const updateDeckModal = (
    <Modal onClose={closeModalsHandler} open={isOpenUpdateDeck} title={'Update Deck'}>
      <CreateOrUpdateDeckForm
        defaultValues={data?.items.find(item => item.id === updateDeckId)}
        onCloseModal={closeModalsHandler}
        onValueSubmit={updateDeckHandler}
        submitButtonTitle={'Update Pack'}
      />
    </Modal>
  )

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1000px',
      }}
    >
      {createDeckModal}
      {updateDeckModal}
      <div className={s.controlsContainer}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button onClick={openModalCreateDeckHandler}>Add new deck</Button>
      </div>
      <div className={s.container}>
        <div className={s.controlsContainer}>
          <TextField
            onChange={searchHandler}
            onClearClick={clearSearchHandler}
            search
            value={searchValue}
          />
          <Tabs
            label={'Show decks cards'}
            onValueChange={setTabsValueHandler}
            tabs={tabs}
            value={tabsValue}
          ></Tabs>
          <Slider
            label={'Number of cards'}
            onValueChange={setSliderValueHandler}
            value={sliderValue}
          />
          <Button
            icon={<TrashOutlinedIcon size={16} />}
            onClick={clearFilter}
            variant={'secondary'}
          >
            Clear Filter
          </Button>
        </div>
        <div className={s.deckContainer}>
          <DecksTable
            decks={data?.items}
            onDeleteClick={deleteDeckHandler}
            onEditClick={openModalUpdateDeckHandler}
          />
          <Pagination
            count={data?.pagination ? data.pagination.totalPages : 1}
            onChange={setCurrentPage}
            onPerPageChange={setPerPageHandler}
            page={currentPage}
            perPage={data?.pagination ? data?.pagination.itemsPerPage : 1}
            perPageOptions={[10, 20, 30, 50, 100]}
          />
        </div>
      </div>
    </div>
  )
}
