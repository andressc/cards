import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const children =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio sint temporibus tenetur, voluptatem voluptates?'

export const Default: Story = {
  args: {
    children: children,
  },
}
