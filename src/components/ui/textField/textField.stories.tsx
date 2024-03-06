import type { Meta, StoryObj } from '@storybook/react'

import MicOutlinedIcon from '@/assets/icons/components/MicOutlinedIcon'
import TrashOutlinedIcon from '@/assets/icons/components/TrashOutlinedIcon'

import { TextField } from './'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'label',
    value: 'value',
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    errorText: 'error',
    label: 'label',
    placeholder: 'efef',
  },
}

export const Diasbled: Story = {
  args: {
    disabled: true,
    endIcon: <MicOutlinedIcon size={20} />,
    label: 'label',
    placeholder: 'efef',
    startIcon: <TrashOutlinedIcon size={20} />,
    value: 'value',
  },
}

export const Icon: Story = {
  args: {
    endIcon: <MicOutlinedIcon size={20} />,
    label: 'label',
    startIcon: <TrashOutlinedIcon size={20} />,
    value: 'value',
  },
}

export const Search: Story = {
  args: {
    label: 'label',
    onClearClick: () => alert('wsedrfgfds'),
    search: true,
    value: 'wefwewf',
  },
}
