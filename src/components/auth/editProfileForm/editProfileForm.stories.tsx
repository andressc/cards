import type { Meta, StoryObj } from '@storybook/react'

import { EditProfileForm } from '@/components/auth/editProfileForm/editProfileForm'
import { Card } from '@/components/ui/card'

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
