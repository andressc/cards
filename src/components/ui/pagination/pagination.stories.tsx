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
  args: {
    currentPage: 1,
    onPageChange: (page: number) => {},
    onPageCountChange: (page: number) => {},
    totalPages: 20,
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(20)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={page => setCurrentPage(page)}
        onPageCountChange={page => setTotalPages(page)}
        totalPages={totalPages}
      />
    )
  },
}
