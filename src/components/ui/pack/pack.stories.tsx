import type { Meta, StoryObj } from '@storybook/react'

import { Pack } from '@/components/ui/pack/pack'

import pack from '../../../assets/pack.png'

const meta = {
  component: Pack,
  tags: ['autodocs'],
  title: 'Components/Pack',
} satisfies Meta<typeof Pack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Pack Name', image: pack },
}
