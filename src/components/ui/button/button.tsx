import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import cn from 'classnames'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  align?: 'center' | 'left' | 'right'
  as?: T
  fullWidth?: boolean
  icon?: ReactNode
  variant?: 'icon' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    align = 'left',
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
    <div className={cn(s.buttonContainer, s[align])}>
      <Component className={classNames} {...rest}>
        {icon}
        {children}
      </Component>
    </div>
  )
}
