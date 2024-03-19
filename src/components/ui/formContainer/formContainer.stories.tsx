import type { Meta, StoryObj } from '@storybook/react'

import { FormContainer } from '@/components/ui/formContainer/formContainer'

const meta = {
  component: FormContainer,
  tags: ['autodocs'],
  title: 'Components/FormContainer',
} satisfies Meta<typeof FormContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
