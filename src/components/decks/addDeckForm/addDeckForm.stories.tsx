import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { AddDeckForm } from './addDeckForm'

const meta = {
  component: AddDeckForm,
  tags: ['autodocs'],
  title: 'Auth/AddDeckForm',
} satisfies Meta<typeof AddDeckForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onValueSubmit: data => {
      console.log(data)
    },
  },
  render: args => {
    return (
      <Card>
        <AddDeckForm {...args} />
      </Card>
    )
  },
}
