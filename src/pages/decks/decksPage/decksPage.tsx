import { ChangeEvent, useState } from 'react'

import TrashOutlinedIcon from '@/assets/icons/components/TrashOutlinedIcon'
import { AddDeckForm, AddDeckFormValues } from '@/components/decks/addDeckForm'
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
  const [isOpenAddDeck, setIsOpenAddDeck] = useState(false)

  const clearFilter = () => {
    setSearchValue(defaultSearchValue)
    setSliderValue(defaultSliderValue)
    setTabsValue(defaultTabsValue)
  }

  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: tabsValue,
    currentPage: currentPage,
    itemsPerPage: perPage,
    maxCardsCount: sliderValue[1],
    minCardsCount: sliderValue[0],
    name: searchValue,
  })

  const [createDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const addDecksHandle = (formValues: AddDeckFormValues) => {
    createDeck(formValues)
    setIsOpenAddDeck(false)
  }

  const modal = (
    <Modal onClose={() => setIsOpenAddDeck(false)} open={isOpenAddDeck} title={'Add New Deck'}>
      <AddDeckForm onCloseModal={() => setIsOpenAddDeck(false)} onValueSubmit={addDecksHandle} />
    </Modal>
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1000px',
      }}
    >
      {modal}
      <div className={s.controlsContainer}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button onClick={() => setIsOpenAddDeck(true)}>Add new deck</Button>
      </div>
      <div className={s.container}>
        <div className={s.controlsContainer}>
          <TextField
            onChange={searchHandler}
            onClearClick={() => {
              setSearchValue('')
            }}
            search
            value={searchValue}
          />
          <Tabs
            label={'Show decks cards'}
            onValueChange={(value: string) => setTabsValue(value)}
            tabs={tabs}
            value={tabsValue}
          ></Tabs>
          <Slider
            label={'Number of cards'}
            onValueChange={(newValue: number[]) => {
              setSliderValue(newValue)
            }}
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
          {<DecksTable decks={data?.items} onDeleteClick={id => deleteDeck({ id })} />}
          <Pagination
            count={data?.pagination ? data.pagination.totalPages : 1}
            onChange={setCurrentPage}
            onPerPageChange={itemPerPage => setPerPage(+itemPerPage)}
            page={currentPage}
            perPage={data?.pagination ? data?.pagination.itemsPerPage : 1}
            perPageOptions={[10, 20, 30, 50, 100]}
          />
        </div>
      </div>
    </div>
  )
}
