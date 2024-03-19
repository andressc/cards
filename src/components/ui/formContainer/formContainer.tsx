import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import s from './formContainer.module.scss'

export type FormContainerProps = {
  align?: '' | 'center' | 'left' | 'right'
  footerLink?: string
  footerTitle?: string
  linkTitle?: string
  title?: string
} & ComponentProps<'div'>

export const FormContainer = ({
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
      {title && (
        <Typography align={'center'} variant={'h1'}>
          {title}
        </Typography>
      )}
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
