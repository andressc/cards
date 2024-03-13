import { ComponentProps } from 'react'

import cn from 'classnames'

import s from './pack.module.scss'

type ImageCellProps = {
  image: string
} & ComponentProps<'div'>

export const Pack = ({ children, className, image, ...rest }: ImageCellProps) => {
  return (
    <div className={cn(s.packContainer, className)} {...rest}>
      <img alt={'image'} src={image} />
      <span>{children}</span>
    </div>
  )
}
