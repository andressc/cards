import type { Meta, StoryObj } from '@storybook/react'

import MoreVerticalOutlinedIcon from '@/assets/icons/components/MoreVerticalOutlinedIcon'
import PersonAddIcon from '@/assets/icons/components/PersonAddIcon'
import PlayCircleOutlinedIcon from '@/assets/icons/components/PlayCircleOutlinedIcon'
import { Avatar } from '@/components/ui/avatar'
import { Cell } from '@/components/ui/cell'

import avatarImage from '../../../assets/avatar.jpeg'
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
      <>
        <DropDownMenuItem onSelect={() => {}}>
          <Cell
            start={<Avatar alt={'image'} src={avatarImage} />}
            subtitle={'addrey@mail.ru'}
            title={'Andrey'}
          />
        </DropDownMenuItem>
        <DropDownMenuSeparator />
        <DropDownMenuItem onSelect={() => {}}>
          <PlayCircleOutlinedIcon size={16} />
          <span>Learn</span>
        </DropDownMenuItem>
        <DropDownMenuSeparator />
        <DropDownMenuItem disabled onSelect={() => {}}>
          <PlayCircleOutlinedIcon size={16} />
          <span>Learn2</span>
        </DropDownMenuItem>
      </>
    ),
    trigger: <Avatar alt={'image'} src={avatarImage} />,
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <DropDownMenuItemWithIcon icon={PersonAddIcon} label={'Label'} onSelect={() => {}} />
        <DropDownMenuSeparator />
        <DropDownMenuItemWithIcon icon={PersonAddIcon} label={'Label'} onSelect={() => {}} />
        <DropDownMenuSeparator />
        <DropDownMenuItemWithIcon
          disabled
          icon={PersonAddIcon}
          label={'Label'}
          onSelect={() => {}}
        />
        <DropDownMenuSeparator />
        <DropDownMenuItemWithIcon icon={PersonAddIcon} label={'Label'} onSelect={() => {}} />
      </>
    ),
    trigger: <MoreVerticalOutlinedIcon />,
  },
}
