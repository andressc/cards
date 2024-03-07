import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { Select } from './'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const selectItems = [
  {
    label: 'select1',
    value: 'select1',
  },
  {
    label: 'select2',
    value: 'select2',
  },
  {
    disabled: true,
    label: 'select3',
    value: 'select3',
  },
  {
    label: 'select4',
    value: 'select4',
  },
  {
    label: 'select5',
    value: 'select5',
  },
  {
    label: 'select6',
    value: 'select6',
  },
  {
    label: 'select7',
    value: 'select7',
  },
  {
    label: 'select8',
    value: 'select8',
  },
]

export const Default: Story = {
  args: {
    label: 'itemText',
    onValueChange: () => {},
    placeholder: 'Select value',
    selectItems: selectItems,
  },
}

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
}
