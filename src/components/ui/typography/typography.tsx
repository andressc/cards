import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import cn from 'classnames'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  theme?: 'dark' | 'light'
  variant?: Variant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const {
    as: Component = 'p',
    children,
    className,
    theme = 'dark',
    variant = 'body1',
    ...rest
  } = props

  const classNames = cn(
    s.typography,
    s[theme],
    s[variant],
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
