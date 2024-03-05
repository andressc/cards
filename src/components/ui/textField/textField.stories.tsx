import type { Meta, StoryObj } from '@storybook/react'

import { CheckBoxSelected } from '@/assets/icons/components/checkBoxSelected'

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
    label: 'label',
    placeholder: 'efef',
    value: 'value',
  },
}

export const Icon: Story = {
  args: {
    endIcon: <CheckBoxSelected />,
    label: 'label',
    startIcon: <CheckBoxSelected />,
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
