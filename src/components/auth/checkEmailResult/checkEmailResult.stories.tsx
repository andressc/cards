import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmailResult } from '@/components/auth/checkEmailResult/checkEmailResult'
import { Card } from '@/components/ui/card'

const meta = {
  component: CheckEmailResult,
  tags: ['autodocs'],
  title: 'Auth/CheckEmailResult',
} satisfies Meta<typeof CheckEmailResult>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <Card>
        <CheckEmailResult {...args} />
      </Card>
    )
  },
}
