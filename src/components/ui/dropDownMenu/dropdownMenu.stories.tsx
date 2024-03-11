import type { Meta, StoryObj } from '@storybook/react'

import HeartIcon from '@/assets/icons/components/HeartIcon'
import PlayCircleOutlinedIcon from '@/assets/icons/components/PlayCircleOutlinedIcon'

import avatar from '../../../assets/avatar.jpeg'
import { DropDownMenuItem, DropDownMenuItemWithIcon, DropDownMenuSeparator, DropdownMenu } from './'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <DropDownMenuItem onSelect={() => {}}>
        <PlayCircleOutlinedIcon size={16} />
        <span>Learn</span>
      </DropDownMenuItem>
    ),
    trigger: <img alt={'image'} src={avatar} />,
  },
}

export const Prt: Story = {
  args: {
    children: (
      <>
        <DropDownMenuItemWithIcon icon={HeartIcon} label={'Label'} onSelect={() => {}} />
        <DropDownMenuSeparator />
        <DropDownMenuItemWithIcon icon={HeartIcon} label={'Label'} onSelect={() => {}} />
        <DropDownMenuSeparator />
        <DropDownMenuItemWithIcon disabled icon={HeartIcon} label={'Label'} onSelect={() => {}} />
        <DropDownMenuSeparator />
        <DropDownMenuItemWithIcon icon={HeartIcon} label={'Label'} onSelect={() => {}} />
      </>
    ),
    trigger: <HeartIcon />,
  },
}
