import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmailCard } from '@/components/auth/checkEmailCard/checkEmailCard'
import { Card } from '@/components/ui/card'

const meta = {
  component: CheckEmailCard,
  tags: ['autodocs'],
  title: 'Auth/CheckEmailCard',
} satisfies Meta<typeof CheckEmailCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <Card>
        <CheckEmailCard {...args} />
      </Card>
    )
  },
}
