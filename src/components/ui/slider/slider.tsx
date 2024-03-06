import { Typography } from '@/components/ui/typography'
import * as SliderRadix from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './slider.module.scss'

export type SliderProps = {
  className?: string
  defaultValue?: number[]
  disabled?: boolean
  id?: string
  max?: number
  min?: number
  minStepsBetweenThumbs?: number
  onValueChange?: (value: number[]) => void
  onValueCommit?: (value: number[]) => void
  step?: number
  value?: number[]
}

export const Slider = ({
  className,
  defaultValue = [25, 75],
  disabled,
  id,
  max = 100,
  min = 0,
  minStepsBetweenThumbs,
  onValueChange,
  onValueCommit,
  step = 1,
  value,
}: SliderProps) => {
  return (
    <div className={s.SliderContainer}>
      {value && (
        <Typography as={'div'} className={s.SliderNumber} variant={'body1'}>
          {value[0]}
        </Typography>
      )}

      <div className={cn(s.checkboxContainer, className)}>
        <SliderRadix.Root
          className={s.SliderRoot}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          max={max}
          min={min}
          minStepsBetweenThumbs={minStepsBetweenThumbs}
          onValueChange={onValueChange}
          onValueCommit={onValueCommit}
          step={step}
          value={value}
        >
          <SliderRadix.Track className={s.SliderTrack}>
            <SliderRadix.Range className={s.SliderRange} />
          </SliderRadix.Track>
          <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
          <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        </SliderRadix.Root>
      </div>
      {value && (
        <Typography as={'div'} className={s.SliderNumber} variant={'body1'}>
          {value[1]}
        </Typography>
      )}
    </div>
  )
}
