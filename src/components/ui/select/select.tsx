import ArrowIosDownOutlinedIcon from '@/assets/icons/components/ArrowIosDownOutlinedIcon'
import ArrowIosUpOutlinedIcon from '@/assets/icons/components/ArrowIosUpOutlinedIcon'
import CheckboxCheckedIcon from '@/assets/icons/components/CheckboxCheckedIcon'
import * as SelectRadix from '@radix-ui/react-select'
import cn from 'classnames'

import s from './select.module.scss'

export type SelectProps = {}

export const Select = ({}: SelectProps) => (
  <SelectRadix.Root>
    <SelectRadix.Trigger aria-label={'Food'} className={s.SelectTrigger}>
      <SelectRadix.Value placeholder={'Select a fruit…'} />
      <SelectRadix.Icon className={s.SelectIcon}>
        <ArrowIosDownOutlinedIcon />
      </SelectRadix.Icon>
    </SelectRadix.Trigger>
    <SelectRadix.Portal>
      <SelectRadix.Content className={s.SelectContent}>
        <SelectRadix.ScrollUpButton className={s.SelectScrollButton}>
          <ArrowIosUpOutlinedIcon />
        </SelectRadix.ScrollUpButton>
        <SelectRadix.Viewport className={s.SelectViewport}>
          <SelectRadix.Group>
            <SelectRadix.Label className={s.SelectLabel}>Fruits</SelectRadix.Label>
            <SelectItem value={'apple'}>Apple</SelectItem>
            <SelectItem value={'banana'}>Banana</SelectItem>
            <SelectItem value={'blueberry'}>Blueberry</SelectItem>
            <SelectItem value={'grapes'}>Grapes</SelectItem>
            <SelectItem value={'pineapple'}>Pineapple</SelectItem>
          </SelectRadix.Group>

          <SelectRadix.Separator className={s.SelectSeparator} />

          <SelectRadix.Group>
            <SelectRadix.Label className={s.SelectLabel}>Vegetables</SelectRadix.Label>
            <SelectItem value={'aubergine'}>Aubergine</SelectItem>
            <SelectItem value={'broccoli'}>Broccoli</SelectItem>
            <SelectItem disabled value={'carrot'}>
              Carrot
            </SelectItem>
            <SelectItem value={'courgette'}>Courgette</SelectItem>
            <SelectItem value={'leek'}>Leek</SelectItem>
          </SelectRadix.Group>

          <SelectRadix.Separator className={s.SelectSeparator} />

          <SelectRadix.Group>
            <SelectRadix.Label className={s.SelectLabel}>Meat</SelectRadix.Label>
            <SelectItem value={'beef'}>Beef</SelectItem>
            <SelectItem value={'chicken'}>Chicken</SelectItem>
            <SelectItem value={'lamb'}>Lamb</SelectItem>
            <SelectItem value={'pork'}>Pork</SelectItem>
          </SelectRadix.Group>
        </SelectRadix.Viewport>
        <SelectRadix.ScrollDownButton className={s.SelectScrollButton}>
          <ArrowIosDownOutlinedIcon />
        </SelectRadix.ScrollDownButton>
      </SelectRadix.Content>
    </SelectRadix.Portal>
  </SelectRadix.Root>
)

const SelectItem = ({ children, className, ...props }: any) => {
  return (
    <SelectRadix.Item className={cn(s.SelectItem, className)} {...props}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      <SelectRadix.ItemIndicator className={'SelectItemIndicator'}>
        <CheckboxCheckedIcon />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  )
}
