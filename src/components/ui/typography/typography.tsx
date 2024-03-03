import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type ButtonProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  theme?: 'dark' | 'light'
  variant?: Variant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'p',
    children,
    className,
    fullWidth,
    theme = 'dark',
    variant = 'body1',
    ...rest
  } = props

  return (
    <Component className={`${s.typography} ${s[theme]} ${s[variant]} ${className}`} {...rest}>
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
