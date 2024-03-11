import type { Meta, StoryObj } from '@storybook/react'

import avatarImage from '../../../assets/avatar.jpeg'
import { Avatar } from './'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: avatarImage,
  },
}

export const Fallback: Story = {
  args: {
    fallback: 'FB',
  },
}
