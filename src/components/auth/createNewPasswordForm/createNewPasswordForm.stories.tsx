import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { CreateNewPasswordForm } from './createNewPasswordForm'

const meta = {
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onValueSubmit: data => {
      console.log(data)
    },
  },
  render: args => {
    return (
      <Card>
        <CreateNewPasswordForm {...args} />
      </Card>
    )
  },
}
