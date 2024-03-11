import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import s from './dropdownMenu.module.scss'
type DropdownMenuProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  trigger?: ReactNode
}

export const DropdownMenu = ({
  align = 'end',
  children,
  className,
  trigger,
}: DropdownMenuProps) => {
  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        <button aria-label={'Customise options'} className={cn(s.iconButton, className)}>
          {trigger}
        </button>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content align={align} className={s.dropdownMenuContent} sideOffset={10}>
          {children}
          <DropdownMenuRadix.Arrow asChild className={s.dropdownMenuArrowBox}>
            <div className={s.dropdownMenuArrow} />
          </DropdownMenuRadix.Arrow>
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}

type DropDownMenuItemProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onSelect: (event: Event) => void
}

export const DropDownMenuItem = ({
  children,
  className,
  disabled,
  onSelect,
}: DropDownMenuItemProps) => {
  return (
    <DropdownMenuRadix.Item
      asChild
      className={cn(s.dropdownMenuItem, className)}
      disabled={disabled}
      onSelect={onSelect}
    >
      <div>{children}</div>
    </DropdownMenuRadix.Item>
  )
}

type DropDownMenuItemPropsWithIcon = {
  className?: string
  disabled?: boolean
  icon: ElementType
  label: string
  onSelect: (event: Event) => void
} & ComponentPropsWithoutRef<'div'>

export const DropDownMenuItemWithIcon = ({
  className,
  disabled,
  icon: Component,
  label,
  onSelect,
  ...rest
}: DropDownMenuItemPropsWithIcon) => {
  return (
    <DropdownMenuRadix.Item
      className={cn(s.dropdownMenuItem, className)}
      {...rest}
      disabled={disabled}
    >
      <Component size={16} />
      <span>{label}</span>
    </DropdownMenuRadix.Item>
  )
}

export const DropDownMenuSeparator = () => {
  return <DropdownMenuRadix.Separator className={s.dropdownMenuSeparator} />
}
