import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { SignUpForm } from './signUpForm'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onValueSubmit: data => {
      console.log(data)
    },
  },
  render: args => {
    return (
      <Card>
        <SignUpForm {...args} />
      </Card>
    )
  },
}
