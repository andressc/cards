import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import cn from 'classnames'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  align?: 'center' | 'left' | 'right'
  as?: T
  children: ReactNode
  color?: 'primary' | 'secondary'
  variant?: Variant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const {
    align = 'left',
    as: Component = 'p',
    children,
    className,
    color = 'primary',
    variant = 'body1',
    ...rest
  } = props

  const classNames = cn(
    s.typography,
    s[variant],
    s[color],
    s[align],
    {
      [s.link]: variant === 'link1' || variant === 'link2',
    },
    className
  )

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  )
}

type Variant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'
