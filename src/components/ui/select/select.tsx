import ArrowIosDownOutlinedIcon from '@/assets/icons/components/ArrowIosDownOutlinedIcon'
import { Typography } from '@/components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'
import cn from 'classnames'

import s from './select.module.scss'

type SelectValue =
  | {
      disabled?: boolean
      label: number
      value: number
    }
  | {
      disabled?: boolean
      label: string
      value: string
    }

export type SelectProps = {
  className?: string
  defaultOpen?: boolean
  defaultValue?: string
  disabled?: boolean
  label?: string
  name?: string
  onValueChange: (value: number | string) => void
  placeholder?: string
  selectItems: SelectValue[]
  value?: string
  variant?: 'pagination' | 'primary'
}

export const Select = ({
  className,
  defaultOpen,
  defaultValue,
  disabled,
  label,
  name,
  onValueChange,
  placeholder,
  selectItems,
  value,
  variant = 'primary',
}: SelectProps) => (
  <div className={s.selectContainer}>
    <SelectRadix.Root
      defaultOpen={defaultOpen}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onValueChange={onValueChange}
      value={value}
    >
      <Typography
        className={cn(s.selectLabel, className)}
        data-disabled={disabled}
        variant={'body2'}
      >
        {label}
      </Typography>
      <SelectRadix.Trigger
        className={cn(s.selectTrigger, {
          [s.selectTriggerPagination]: variant === 'pagination',
        })}
      >
        <Typography variant={'body1'}>
          <SelectRadix.Value placeholder={placeholder} />
        </Typography>
        <SelectRadix.Icon className={s.selectIcon}>
          <ArrowIosDownOutlinedIcon size={16} />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content className={s.selectContent} position={'popper'} side={'bottom'}>
          <SelectRadix.Viewport>
            <SelectRadix.Group>
              {selectItems.map(si => (
                <SelectRadix.Item
                  className={cn(s.selectItem, {
                    [s.selectItemPagination]: variant === 'pagination',
                  })}
                  disabled={si.disabled}
                  key={si.value}
                  value={si.value.toString()}
                >
                  <SelectRadix.ItemText>
                    <Typography variant={'body1'}>{si.label}</Typography>
                  </SelectRadix.ItemText>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  </div>
)
