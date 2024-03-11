import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import cn from 'classnames'

import s from './card.module.scss'

export type TypographyProps<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: TypographyProps<T>) => {
  const { as: Component = 'div', children, className, ...rest } = props

  return (
    <Component className={cn(s.cardContainer, className)} {...rest}>
      {children}
    </Component>
  )
}
