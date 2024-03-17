import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/ui/header/header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Auth/FormContainer',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
