import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { ForgotPasswordForm } from './forgotPasswordForm'

const meta = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

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
        <ForgotPasswordForm {...args} />
      </Card>
    )
  },
}
