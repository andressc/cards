import { ComponentPropsWithoutRef, ReactNode } from 'react'

import cn from 'classnames'

import s from './textField.module.scss'

export type TextFieldProps = {
  endIcon?: ReactNode
  errorText?: string
  label?: string
  startIcon?: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: TextFieldProps) => {
  const { className, endIcon, errorText, label, startIcon, ...rest } = props

  const classNames = {
    input: cn({ [s.error]: !!errorText && errorText.length > 0 }),
    label: cn(s.label, { [s.disabled]: rest.disabled }),
  }

  return (
    <div className={s.textFieldContainer}>
      <span className={classNames.label}>{label}</span>
      <input className={classNames.input} {...rest} aria-label={label} />
      <span className={s.error}>{errorText}</span>
    </div>
  )
}
