import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type RadioGroupProps = {}

export const RadioGroup = ({}: RadioGroupProps) => {
  return (
    <RadioGroupRadix.Root
      aria-label={'View density'}
      className={s.RadioGroupRoot}
      defaultValue={'default'}
    >
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupRadix.Item className={s.RadioGroupItem} id={'r1'} value={'default'}>
          <RadioGroupRadix.Indicator className={s.RadioGroupIndicator} />
        </RadioGroupRadix.Item>
        <label className={s.Label} htmlFor={'r1'}>
          Default
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupRadix.Item className={s.RadioGroupItem} id={'r2'} value={'comfortable'}>
          <RadioGroupRadix.Indicator className={s.RadioGroupIndicator} />
        </RadioGroupRadix.Item>
        <label className={s.Label} htmlFor={'r2'}>
          Comfortable
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupRadix.Item className={s.RadioGroupItem} id={'r3'} value={'compact'}>
          <RadioGroupRadix.Indicator className={s.RadioGroupIndicator} />
        </RadioGroupRadix.Item>
        <label className={s.Label} htmlFor={'r3'}>
          Compact
        </label>
      </div>
    </RadioGroupRadix.Root>
  )
}
