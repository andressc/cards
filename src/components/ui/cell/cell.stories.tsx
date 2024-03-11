import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/ui/avatar'

import avatarImage from '../../../assets/avatar.jpeg'
import { Cell } from './'

const meta = {
  component: Cell,
  tags: ['autodocs'],
  title: 'Components/Cell',
} satisfies Meta<typeof Cell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    start: <Avatar src={avatarImage} />,
    subtitle: 'asrrcfff@mail.ru',
    title: 'Andrey',
  },
}
