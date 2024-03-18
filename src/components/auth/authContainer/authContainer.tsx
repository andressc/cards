import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import s from './authContainer.module.scss'

export type FormContainerProps = {
  align?: '' | 'center' | 'left' | 'right'
  footerLink?: string
  footerTitle?: string
  linkTitle?: string
  title?: string
} & ComponentProps<'div'>

export const AuthContainer = ({
  align = '',
  children,
  className,
  footerLink,
  footerTitle,
  linkTitle,
  title,
  ...rest
}: FormContainerProps) => {
  return (
    <div className={cn(s.authContainer, s[align], className)} {...rest}>
      <Typography align={'center'} variant={'h1'}>
        {title}
      </Typography>
      {children}
      <div className={cn(s.authFooter, className)} {...rest}>
        {footerTitle && <Typography variant={'body2'}>{footerTitle}</Typography>}
        {footerLink && (
          <Typography as={Link} to={footerLink} variant={'link1'}>
            {linkTitle}
          </Typography>
        )}
      </div>
    </div>
  )
}
