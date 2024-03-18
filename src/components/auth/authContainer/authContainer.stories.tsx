import type { Meta, StoryObj } from '@storybook/react'

import { AuthContainer } from '@/components/auth/authContainer/authContainer'

const meta = {
  component: AuthContainer,
  tags: ['autodocs'],
  title: 'Auth/AuthContainer',
} satisfies Meta<typeof AuthContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
