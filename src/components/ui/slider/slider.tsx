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
    <div className={cn(s.sliderContainer, className)}>
      {value && (
        <Typography as={'div'} className={s.sliderNumber} variant={'body1'}>
          {value[0]}
        </Typography>
      )}

      <div>
        <SliderRadix.Root
          className={s.sliderRoot}
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
          <SliderRadix.Track className={s.sliderTrack}>
            <SliderRadix.Range className={s.sliderRange} />
          </SliderRadix.Track>
          <SliderRadix.Thumb aria-label={'Volume'} className={s.sliderThumb} />
          <SliderRadix.Thumb aria-label={'Volume'} className={s.sliderThumb} />
        </SliderRadix.Root>
      </div>
      {value && (
        <Typography as={'div'} className={s.sliderNumber} variant={'body1'}>
          {value[1]}
        </Typography>
      )}
    </div>
  )
}
