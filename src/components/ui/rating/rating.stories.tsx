import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Rating } from './'

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState(3)

    return <Rating setRating={value => setValue(value)} value={value} />
  },
}
