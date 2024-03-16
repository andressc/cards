import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { LoginForm } from './login-form'

const meta = {
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof LoginForm>

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
        <LoginForm {...args} />
      </Card>
    )
  },
}
