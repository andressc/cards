import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const AllTypography: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography variant={'h1'}>Heading 1</Typography>
      <Typography variant={'h2'}>Heading 2</Typography>
      <Typography variant={'h3'}>Heading 3</Typography>
      <Typography variant={'h4'}>Heading 3</Typography>
      <Typography variant={'subtitle1'}>Subtitle 1</Typography>
      <Typography variant={'subtitle2'}>Subtitle 2</Typography>
      <Typography variant={'body1'}>Body 1</Typography>
      <Typography variant={'body2'}>Body 2</Typography>
      <Typography variant={'caption'}>Caption</Typography>
      <Typography as={'a'} href={'https://google.com'} variant={'link1'}>
        Link1
      </Typography>
      <Typography as={'a'} href={'https://google.com'} variant={'link2'}>
        Link2
      </Typography>
      <Typography variant={'overline'}>Overline</Typography>
    </div>
  ),
}
