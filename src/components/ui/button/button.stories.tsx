import type { Meta, StoryObj } from '@storybook/react'

import EmailOutlinedIcon from '@/assets/icons/components/EmailOutlinedIcon'
import PlayCircleOutlinedIcon from '@/assets/icons/components/PlayCircleOutlinedIcon'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    href: 'https://google.com',
    icon: <EmailOutlinedIcon />,
    variant: 'primary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    variant: 'primary',
  },
}

export const Icon: Story = {
  args: {
    disabled: false,
    icon: <PlayCircleOutlinedIcon size={16} />,
    variant: 'icon',
  },
}
