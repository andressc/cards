import { ComponentProps } from 'react'

import cn from 'classnames'

import s from './header.module.scss'

export type HeaderProps = ComponentProps<'header'>

export const Header = ({ className, ...rest }: HeaderProps) => {
  return <header className={cn(s.header, className)} {...rest} />
}
