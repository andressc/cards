import { ComponentProps } from 'react'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import s from './formContainer.module.scss'

export type FormContainerProps = {
  footerLink?: string
  footerTitle?: string
  linkTitle?: string
  title?: string
} & ComponentProps<'div'>

export const FormContainer = ({
  children,
  className,
  footerLink,
  footerTitle,
  linkTitle,
  title,
  ...rest
}: FormContainerProps) => {
  return (
    <div className={cn(s.formContainer, className)} {...rest}>
      <Typography align={'center'} className={s.formTitle} variant={'h1'}>
        {title}
      </Typography>
      {children}
      <div className={cn(s.formFooter, className)} {...rest}>
        {footerTitle && (
          <Typography className={s.formFooterTitle} variant={'body2'}>
            {footerTitle}
          </Typography>
        )}
        {footerLink && (
          <Typography as={'a'} className={s.formFooterTitle} variant={'link1'}>
            {linkTitle}
          </Typography>
        )}
      </div>
    </div>
  )
}
