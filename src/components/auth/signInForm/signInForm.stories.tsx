import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/components/auth/signInForm/signInForm'
import { Card } from '@/components/ui/card'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/SignInForm',
} satisfies Meta<typeof SignInForm>

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
        <SignInForm {...args} />
      </Card>
    )
  },
}
