import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { CreateOrUpdateDeckForm } from './createOrUpdateDeckForm'

const meta = {
  component: CreateOrUpdateDeckForm,
  tags: ['autodocs'],
  title: 'Decks/CreateOrUpdateDeckForm',
} satisfies Meta<typeof CreateOrUpdateDeckForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onValueSubmit: data => {
      console.log(data)
    },
    submitButtonTitle: 'Submit',
  },
  render: args => {
    return (
      <Card>
        <CreateOrUpdateDeckForm {...args} />
      </Card>
    )
  },
}
