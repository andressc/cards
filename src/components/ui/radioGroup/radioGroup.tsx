import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { Direction } from '@radix-ui/react-direction'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './radioGroup.module.scss'

type Option = {
  label: string
  value: string
}

type RadioGroupProps = {
  defaultValue: string | undefined
  disabled?: boolean
  name?: string
  onValueChange: (value: string) => void
  options: Option[]
} & ComponentPropsWithoutRef<'div'>

export const RadioGroup = ({
  defaultValue,
  disabled,
  name,
  onValueChange,
  options,
  ...rest
}: RadioGroupProps & { dir?: Direction }) => {
  return (
    <RadioGroupRadix.Root
      aria-label={'View density'}
      className={s.radioGroupRoot}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onValueChange={onValueChange}
      {...rest}
    >
      {options.map(v => (
        <div
          className={cn(s.radioGroupElement, { [s.radioGroupElementDisabled]: disabled })}
          key={v.value}
        >
          <RadioGroupRadix.Item className={s.radioGroupItem} id={v.value} value={v.value}>
            <RadioGroupRadix.Indicator className={s.radioGroupIndicator} />
          </RadioGroupRadix.Item>
          <Typography
            as={'label'}
            className={cn({ [s.labelDisabled]: disabled })}
            htmlFor={v.value}
            variant={'body2'}
          >
            {v.label}
          </Typography>
        </div>
      ))}
    </RadioGroupRadix.Root>
  )
}
