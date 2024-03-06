import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: { checked: true },
}

export const UnChecked: Story = {
  args: { checked: false },
}

export const ForLabel: Story = {
  args: { checked: true, label: 'label' },
}

export const Disabled: Story = {
  args: { checked: true, disabled: true, label: 'label' },
}
