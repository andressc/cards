import { ComponentProps } from 'react'

import { Select } from '@/components/ui/select'
import cn from 'classnames'

import s from './pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
  onPageCountChange: (page: number) => void
  totalPages: number
} & ComponentProps<'div'>

export const Pagination = ({
  currentPage,
  onPageChange,
  onPageCountChange,
  totalPages,
}: PaginationProps) => {
  const selectItems = [
    {
      label: '10',
      value: '10',
    },
    {
      label: '20',
      value: '20',
    },
    {
      label: '30',
      value: '30',
    },
    {
      label: '50',
      value: '50',
    },
    {
      label: '100',
      value: '100',
    },
  ]

  const renderPages = () => {
    const pages = []

    if (currentPage > 1) {
      pages.push(
        <span key={'first'} onClick={() => onPageChange(1)}>
          1
        </span>,
        <span key={'prev-dots'}>...</span>
      )
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 0 && i <= totalPages) {
        if (i === currentPage) {
          pages.push(
            <span className={s.currentPage} key={i}>
              {i}
            </span>
          )
        } else {
          pages.push(
            <span key={i} onClick={() => onPageChange(i)}>
              {i}
            </span>
          )
        }
      }
    }

    if (currentPage < totalPages) {
      pages.push(
        <span key={'next-dots'}>...</span>,
        <span key={'last'} onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </span>
      )
    }

    return pages
  }

  return (
    <div className={s.pagination}>
      <span onClick={() => onPageChange(currentPage - 1)}>{'<'}</span>
      {renderPages()}
      <span onClick={() => onPageChange(currentPage + 1)}>{'>'}</span>

      <p>Показать</p>
      <Select
        //onValueChange={e => onPageCountChange(Number(e.target.value))}
        onValueChange={e => onPageCountChange(10)}
        selectItems={selectItems}
      />
      <p>на странице</p>
    </div>
  )
}
