import type { Meta, StoryObj } from '@storybook/react'

import { EditProfileCard } from '@/components/auth/editProfileCard/editProfileCard'
import { Card } from '@/components/ui/card'

const meta = {
  component: EditProfileCard,
  tags: ['autodocs'],
  title: 'Auth/EditProfileCard',
} satisfies Meta<typeof EditProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <Card>
        <EditProfileCard {...args} />
      </Card>
    )
  },
}
