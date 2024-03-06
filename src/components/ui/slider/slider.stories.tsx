import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const WithControl: Story = {
  args: {
    value: [1, 30],
  },
  render: () => {
    const [value, setValue] = useState([0, 20])

    const onValueChange = (newValue: number[]) => {
      setValue(newValue)
    }

    return <Slider onValueChange={onValueChange} value={value} />
  },
}

export const WithOutControl: Story = {}
