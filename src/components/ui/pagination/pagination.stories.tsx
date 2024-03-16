import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const TOTAL_PAGES_COUNT = 10

    return (
      <Pagination
        count={TOTAL_PAGES_COUNT}
        onChange={setPage}
        onPerPageChange={(itemPerPage: number | string) => setPerPage(+itemPerPage)}
        page={page}
        perPage={perPage}
        perPageOptions={[10, 20, 30, 50, 100]}
      />
    )
  },
}
