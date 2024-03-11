import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import s from './cell.module.scss'

type CellProps = {
  className?: string
  end?: ReactNode
  start?: ReactNode
  subtitle?: string
  title?: string
} & ComponentPropsWithoutRef<'div'>

export const Cell = ({ className, end, start, subtitle, title, ...rest }: CellProps) => (
  <div className={cn(s.cellContainer, className)} {...rest}>
    {start && start}
    <div className={s.textContainer}>
      <Typography variant={'subtitle2'}>{title}</Typography>
      <Typography className={s.subtitle} variant={'caption'}>
        {subtitle}
      </Typography>
    </div>
    {end && end}
  </div>
)
