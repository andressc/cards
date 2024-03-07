import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  {
    label: 'RadioGroup1',
    value: 'RadioGroupValue1',
  },
  {
    label: 'RadioGroup2',
    value: 'RadioGroupValue2',
  },
  {
    label: 'RadioGroup3',
    value: 'RadioGroupValue3',
  },
]

export const Default: Story = {
  args: {
    defaultValue: 'RadioGroupValue3',
    onValueChange: (value: string) => console.log(value),
    options: options,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
