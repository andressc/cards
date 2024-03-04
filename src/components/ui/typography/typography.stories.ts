import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const children =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio sint temporibus tenetur, voluptatem voluptates?'

export const H1: Story = {
  args: {
    children: children,
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: children,
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: children,
    variant: 'h3',
  },
}

export const H4: Story = {
  args: {
    children: children,
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    children: children,
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: children,
    variant: 'body2',
  },
}

export const Caption: Story = {
  args: {
    children: children,
    variant: 'caption',
  },
}

export const Link1: Story = {
  args: {
    as: 'a',
    children: children,
    href: 'https://google.com',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    children: children,
    href: 'https://google.com',
    variant: 'link2',
  },
}

export const Overline: Story = {
  args: {
    children: children,
    variant: 'overline',
  },
}

export const Subtitle1: Story = {
  args: {
    children: children,
    variant: 'subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    children: children,
    variant: 'subtitle2',
  },
}
