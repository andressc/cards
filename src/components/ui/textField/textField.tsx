import { ComponentProps, ReactNode, forwardRef, useState } from 'react'

import CloseOutlinedIcon from '@/assets/icons/components/CloseOutlinedIcon'
import EyeOutlinedIcon from '@/assets/icons/components/EyeOutlinedIcon'
import SearchOutlinedIcon from '@/assets/icons/components/SearchOutlinedIcon'
import cn from 'classnames'

import s from './textField.module.scss'

export type TextFieldProps = {
  endIcon?: ReactNode
  errorText?: string
  label?: string
  onClearClick?: () => void
  password?: boolean
  search?: boolean
  startIcon?: ReactNode
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      endIcon,
      errorText,
      label,
      onClearClick,
      password = false,
      search,
      startIcon,
      ...rest
    },
    ref
  ) => {
    if (search) {
      startIcon = <SearchOutlinedIcon size={20} />
    }

    const [showPassword, setShowPassword] = useState(password)

    const disabledStyle = { [s.disabled]: rest.disabled }

    const classNames = {
      endIcon: cn(s.icon, s.endIcon, disabledStyle),
      input: cn({ [s.error]: !!errorText && !rest.disabled && errorText.length > 0 }),
      label: cn(s.label, disabledStyle),
      startIcon: cn(s.icon, s.startIcon, disabledStyle),
    }

    const isShowClearButton =
      onClearClick && !rest.disabled && typeof rest?.value === 'string' && rest?.value.length > 0

    const dataIconStart = startIcon ? 'start' : ''
    const dataIconEnd = endIcon || isShowClearButton ? 'end' : ''
    const dataIcon = dataIconStart + dataIconEnd

    return (
      <div className={s.textFieldContainer}>
        <span className={classNames.label}>{label}</span>
        <div className={s.inputContainer}>
          {!!startIcon && <span className={classNames.startIcon}>{startIcon}</span>}
          <input
            className={classNames.input}
            type={!showPassword ? 'text' : 'password'}
            {...rest}
            aria-label={label}
            data-icon={dataIcon}
            ref={ref}
          />
          {isShowClearButton && (
            <button className={s.clearButton} onClick={onClearClick} type={'button'}>
              <CloseOutlinedIcon size={20} />
            </button>
          )}
          {password && (
            <button
              className={s.clearButton}
              onClick={() => setShowPassword(v => !v)}
              type={'button'}
            >
              <EyeOutlinedIcon size={20} />
            </button>
          )}
          {!!endIcon && !isShowClearButton && <span className={classNames.endIcon}>{endIcon}</span>}
        </div>
        <span className={s.error}>{!rest.disabled && errorText}</span>
      </div>
    )
  }
)
