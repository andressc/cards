import { ComponentPropsWithoutRef, ReactNode } from 'react'

import CloseOutlinedIcon from '@/assets/icons/components/CloseOutlinedIcon'
import SearchOutlinedIcon from '@/assets/icons/components/SearchOutlinedIcon'
import cn from 'classnames'

import s from './textField.module.scss'

export type TextFieldProps = {
  endIcon?: ReactNode
  errorText?: string
  label?: string
  onClearClick?: () => void
  search?: boolean
  startIcon?: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  className,
  endIcon,
  errorText,
  label,
  onClearClick,
  search,
  startIcon,
  ...rest
}: TextFieldProps) => {
  if (search) {
    startIcon = <SearchOutlinedIcon />
  }

  const classNames = {
    endIcon: cn(s.icon, s.endIcon),
    input: cn({ [s.error]: !!errorText && errorText.length > 0 }),
    label: cn(s.label, { [s.disabled]: rest.disabled }),
    startIcon: cn(s.icon, s.startIcon),
  }

  const isShowClearButton =
    onClearClick && typeof rest?.value === 'string' && rest?.value.length > 0

  const dataIconStart = startIcon ? 'start' : ''
  const dataIconEnd = endIcon || isShowClearButton ? 'end' : ''
  const dataIcon = dataIconStart + dataIconEnd

  return (
    <div className={s.textFieldContainer}>
      <span className={classNames.label}>{label}</span>
      <div className={s.inputContainer}>
        {!!startIcon && <span className={classNames.startIcon}>{startIcon}</span>}
        <input className={classNames.input} {...rest} aria-label={label} data-icon={dataIcon} />
        {isShowClearButton && (
          <button className={s.clearButton} onClick={onClearClick} type={'button'}>
            <CloseOutlinedIcon />
          </button>
        )}
        {!!endIcon && <span className={classNames.endIcon}>{endIcon}</span>}
      </div>
      <span className={s.error}>{errorText}</span>
    </div>
  )
}
