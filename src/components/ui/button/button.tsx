import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import cn from 'classnames'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  icon?: ReactNode
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon,
    variant = 'primary',
    ...rest
  } = props

  const classNames = cn(s.button, s[variant], { [s.fullWidth]: fullWidth }, className)

  return (
    <Component className={classNames} {...rest}>
      {icon}
      {children}
    </Component>
  )
}
