import type { Meta, StoryObj } from '@storybook/react'

import { ElementType, useEffect, useState } from 'react'

import ArrowBackOutlinedIcon from '@/assets/icons/components/ArrowBackOutlinedIcon'
import ArrowForwardOutlinedIcon from '@/assets/icons/components/ArrowForwardOutlinedIcon'
import ArrowIosBackOutlinedIcon from '@/assets/icons/components/ArrowIosBackOutlinedIcon'
import ArrowIosDownOutlinedIcon from '@/assets/icons/components/ArrowIosDownOutlinedIcon'
import ArrowIosForwardOutlinedIcon from '@/assets/icons/components/ArrowIosForwardOutlinedIcon'
import ArrowIosUpOutlinedIcon from '@/assets/icons/components/ArrowIosUpOutlinedIcon'
import BlockOutlinedIcon from '@/assets/icons/components/BlockOutlinedIcon'
import BookmarkIcon from '@/assets/icons/components/BookmarkIcon'
import BookmarkOutlinedIcon from '@/assets/icons/components/BookmarkOutlinedIcon'
import CalendarIcon from '@/assets/icons/components/CalendarIcon'
import CalendarOutlinedIcon from '@/assets/icons/components/CalendarOutlinedIcon'
import CloseOutlinedIcon from '@/assets/icons/components/CloseOutlinedIcon'
import ColorPaletteOutlinedIcon from '@/assets/icons/components/ColorPaletteOutlinedIcon'
import CopyIcon from '@/assets/icons/components/CopyIcon'
import CopyOutlinedIcon from '@/assets/icons/components/CopyOutlinedIcon'
import CreditCardIcon from '@/assets/icons/components/CreditCardIcon'
import CreditCardOutlinedIcon from '@/assets/icons/components/CreditCardOutlinedIcon'
import EditIcon from '@/assets/icons/components/EditIcon'
import EditOutlinedIcon from '@/assets/icons/components/EditOutlinedIcon'
import EmailIcon from '@/assets/icons/components/EmailIcon'
import EmailOutlinedIcon from '@/assets/icons/components/EmailOutlinedIcon'
import ExpandOutlinedIcon from '@/assets/icons/components/ExpandOutlinedIcon'
import EyeIcon from '@/assets/icons/components/EyeIcon'
import EyeOffIcon from '@/assets/icons/components/EyeOffIcon'
import EyeOffOutlinedIcon from '@/assets/icons/components/EyeOffOutlinedIcon'
import EyeOutlinedIcon from '@/assets/icons/components/EyeOutlinedIcon'
import FunnelOutlinedIcon from '@/assets/icons/components/FunnelOutlinedIcon'
import HeartIcon from '@/assets/icons/components/HeartIcon'
import HeartOutlinedIcon from '@/assets/icons/components/HeartOutlinedIcon'
import HomeIcon from '@/assets/icons/components/HomeIcon'
import HomeOutlinedIcon from '@/assets/icons/components/HomeOutlinedIcon'
import ImageIcon from '@/assets/icons/components/ImageIcon'
import ImageOutlinedIcon from '@/assets/icons/components/ImageOutlinedIcon'
import LayersIcon from '@/assets/icons/components/LayersIcon'
import LayersOutlinedIcon from '@/assets/icons/components/LayersOutlinedIcon'
import LogOutOutlinedIcon from '@/assets/icons/components/LogOutOutlinedIcon'
import MaximizeIcon from '@/assets/icons/components/MaximizeIcon'
import MaximizeOutlinedIcon from '@/assets/icons/components/MaximizeOutlinedIcon'
import MenuOutlinedIcon from '@/assets/icons/components/MenuOutlinedIcon'
import MessageCircleIcon from '@/assets/icons/components/MessageCircleIcon'
import MessageCircleOutlinedIcon from '@/assets/icons/components/MessageCircleOutlinedIcon'
import MicIcon from '@/assets/icons/components/MicIcon'
import MicOutlinedIcon from '@/assets/icons/components/MicOutlinedIcon'
import MoreHorizontalOutlinedIcon from '@/assets/icons/components/MoreHorizontalOutlinedIcon'
import MoreVerticalOutlinedIcon from '@/assets/icons/components/MoreVerticalOutlinedIcon'
import PaperPlaneOutlinedIcon from '@/assets/icons/components/PaperPlaneOutlinedIcon'
import PauseCircleIcon from '@/assets/icons/components/PauseCircleIcon'
import PauseCircleOutlinedIcon from '@/assets/icons/components/PauseCircleOutlinedIcon'
import PersonAddIcon from '@/assets/icons/components/PersonAddIcon'
import PersonAddOutlinedIcon from '@/assets/icons/components/PersonAddOutlinedIcon'
import PersonIcon from '@/assets/icons/components/PersonIcon'
import PersonOutlinedIcon from '@/assets/icons/components/PersonOutlinedIcon'
import PersonRemoveIcon from '@/assets/icons/components/PersonRemoveIcon'
import PersonRemoveOutlinedIcon from '@/assets/icons/components/PersonRemoveOutlinedIcon'
import PinIcon from '@/assets/icons/components/PinIcon'
import PinOutlinedIcon from '@/assets/icons/components/PinOutlinedIcon'
import PlayCircleIcon from '@/assets/icons/components/PlayCircleIcon'
import PlayCircleOutlinedIcon from '@/assets/icons/components/PlayCircleOutlinedIcon'
import PlusCircleIcon from '@/assets/icons/components/PlusCircleIcon'
import PlusCircleOutlinedIcon from '@/assets/icons/components/PlusCircleOutlinedIcon'
import PlusSquareIcon from '@/assets/icons/components/PlusSquareIcon'
import PlusSquareOutlinedIcon from '@/assets/icons/components/PlusSquareOutlinedIcon'
import RadioButtonCheckedIcon from '@/assets/icons/components/RadioButtonCheckedIcon'
import RadioButtonUncheckedIcon from '@/assets/icons/components/RadioButtonUncheckedIcon'
import SearchOutlinedIcon from '@/assets/icons/components/SearchOutlinedIcon'
import SettingsIcon from '@/assets/icons/components/SettingsIcon'
import SettingsOutlinedIcon from '@/assets/icons/components/SettingsOutlinedIcon'
import StarIcon from '@/assets/icons/components/StarIcon'
import StarOutlinedIcon from '@/assets/icons/components/StarOutlinedIcon'
import TrashIcon from '@/assets/icons/components/TrashIcon'
import TrashOutlinedIcon from '@/assets/icons/components/TrashOutlinedIcon'
import TrendingUpOutlinedIcon from '@/assets/icons/components/TrendingUpOutlinedIcon'
import copy from 'clipboard-copy'

import s from './icon.module.scss'

const meta = {
  component: ArrowBackOutlinedIcon,
  title: 'Icons/All',
} satisfies Meta<typeof ArrowBackOutlinedIcon>

export default meta
type Story = StoryObj<typeof meta>

type IconItemProps = {
  component: ElementType
}

function getComponentName(Component: React.ElementType): string {
  if (typeof Component === 'string') {
    return Component
  }

  return Component.displayName || Component.name || 'UnknownComponent'
}

const IconItem = (props: IconItemProps) => {
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false)
      }, 500)
    }
  }, [alert])

  const { component: Component } = props

  const handleCopyClick = () => {
    copy(`<${getComponentName(Component)}/>`)

    setAlert(true)
  }

  return (
    <div className={s.iconContainer} onClick={handleCopyClick}>
      <Component size={100} />
      {alert && <span className={s.alert}>Сopied</span>}
    </div>
  )
}

const iconList = [
  ArrowBackOutlinedIcon,
  ArrowForwardOutlinedIcon,
  ArrowIosBackOutlinedIcon,
  ArrowIosDownOutlinedIcon,
  ArrowIosForwardOutlinedIcon,
  ArrowIosUpOutlinedIcon,
  BlockOutlinedIcon,
  BookmarkIcon,
  BookmarkOutlinedIcon,
  CalendarIcon,
  CalendarOutlinedIcon,
  CloseOutlinedIcon,
  ColorPaletteOutlinedIcon,
  CopyIcon,
  CopyOutlinedIcon,
  CreditCardIcon,
  CreditCardOutlinedIcon,
  EditIcon,
  EditOutlinedIcon,
  EmailIcon,
  EmailOutlinedIcon,
  ExpandOutlinedIcon,
  EyeIcon,
  EyeOffIcon,
  EyeOffOutlinedIcon,
  EyeOutlinedIcon,
  FunnelOutlinedIcon,
  HeartIcon,
  HeartOutlinedIcon,
  HomeIcon,
  HomeOutlinedIcon,
  ImageIcon,
  ImageOutlinedIcon,
  LayersIcon,
  LayersOutlinedIcon,
  LogOutOutlinedIcon,
  MaximizeIcon,
  MaximizeOutlinedIcon,
  MenuOutlinedIcon,
  MessageCircleIcon,
  MessageCircleOutlinedIcon,
  MicIcon,
  MicOutlinedIcon,
  MoreHorizontalOutlinedIcon,
  MoreVerticalOutlinedIcon,
  PaperPlaneOutlinedIcon,
  PauseCircleIcon,
  PauseCircleOutlinedIcon,
  PersonAddIcon,
  PersonAddOutlinedIcon,
  PersonIcon,
  PersonOutlinedIcon,
  PersonRemoveIcon,
  PersonRemoveOutlinedIcon,
  PinIcon,
  PinOutlinedIcon,
  PlayCircleIcon,
  PlayCircleOutlinedIcon,
  PlusCircleIcon,
  PlusCircleOutlinedIcon,
  PlusSquareIcon,
  PlusSquareOutlinedIcon,
  RadioButtonCheckedIcon,
  RadioButtonUncheckedIcon,
  SearchOutlinedIcon,
  SettingsIcon,
  SettingsOutlinedIcon,
  StarIcon,
  StarOutlinedIcon,
  TrashIcon,
  TrashOutlinedIcon,
  TrendingUpOutlinedIcon,
]

export const AllIcons: Story = {
  render: () => (
    <div className={s.container}>
      {iconList.map((c, i) => (
        <IconItem component={c} key={i}></IconItem>
      ))}
    </div>
  ),
}
