import { ReactNode } from 'react'

import CheckboxCheckedIcon from '@/assets/icons/components/CheckboxCheckedIcon'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import cn from 'classnames'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: ReactNode
  onCheckedChange: (checked: boolean) => void
  required?: boolean
}

export const Checkbox = ({
  checked,
  className,
  disabled,
  id,
  label,
  onCheckedChange,
  required,
}: CheckboxProps) => {
  return (
    <div className={cn(s.checkboxContainer, className)}>
      <LabelRadix.Root className={cn(s.checkboxLabel, { [s.disabled]: disabled })}>
        <div className={cn(s.checkboxCircle, { [s.disabled]: disabled })}>
          <CheckboxRadix.Root
            checked={checked}
            className={s.checkboxRoot}
            disabled={disabled}
            id={id}
            onCheckedChange={onCheckedChange}
            required={required}
          >
            <CheckboxRadix.Indicator asChild className={s.checkboxIndicator}>
              <div className={s.checkboxIcon}>
                <CheckboxCheckedIcon />
              </div>
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
