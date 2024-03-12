import type { Meta, StoryObj } from '@storybook/react'

import avatarImage from '@/assets/avatar.jpeg'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Cell } from '@/components/ui/cell'
import { Header } from '@/components/ui/header/header'
import { Typography } from '@/components/ui/typography'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Layout/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const WithAvatar: Story = {
  args: {},
  render: () => (
    <Header style={{ justifyContent: 'space-between' }}>
      <Typography variant={'h2'}>SiteLogo</Typography>

      <Cell
        start={<Avatar alt={'image'} src={avatarImage} />}
        subtitle={'addrey@mail.ru'}
        title={'Andrey'}
      />
    </Header>
  ),
}

export const WithButton: Story = {
  args: {},
  render: () => (
    <Header style={{ justifyContent: 'space-between' }}>
      <Typography variant={'h2'}>SiteLogo</Typography>

      <Button>Sign In</Button>
    </Header>
  ),
}
