import { ReactNode } from 'react'

import { CheckBoxSelected } from '@/assets/icons/components/checkBoxSelected'
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
  onChange: (checked: boolean) => void
  required?: boolean
}

export const Checkbox = ({
  checked,
  className,
  disabled,
  id,
  label,
  onChange,
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
            onCheckedChange={onChange}
            required={required}
          >
            <CheckboxRadix.Indicator asChild className={s.checkboxIndicator}>
              <div className={s.checkboxIcon}>
                <CheckBoxSelected />
              </div>
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
