import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { EditProfileForm } from './editProfileForm'

const meta = {
  component: EditProfileForm,
  tags: ['autodocs'],
  title: 'Auth/EditProfileForm',
} satisfies Meta<typeof EditProfileForm>

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
        <EditProfileForm {...args} />
      </Card>
    )
  },
}
