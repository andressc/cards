import { ComponentProps, useState } from 'react'

import StarIcon from '@/assets/icons/components/StarIcon'
import StarOutlinedIcon from '@/assets/icons/components/StarOutlinedIcon'
import cn from 'classnames'

import s from './rating.module.scss'

type RatingProps = {
  setRating: (value: number) => void
  size?: number
  value?: number
} & ComponentProps<'div'>

export const Rating = ({ className, setRating, size = 5, value = 0, ...rest }: RatingProps) => {
  const [hoverRating, setHoverRating] = useState(value)

  const handleMouseOver = (index: number) => {
    setHoverRating(index)
  }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }

  const handleClick = (index: number) => {
    setRating(index)
  }

  const ratingItems = []

  for (let i = 1; i <= size; i++) {
    ratingItems.push(
      <RatingItem
        isSelected={i <= (hoverRating || value)}
        key={i}
        onClick={() => handleClick(i)}
        onMouseLeave={handleMouseLeave}
        onMouseOver={() => handleMouseOver(i)}
      />
    )
  }

  return (
    <div className={cn(s.ratingContainer, className)} {...rest}>
      {ratingItems}
    </div>
  )
}

type RatingItemProps = {
  isSelected?: boolean
} & ComponentProps<'span'>
export const RatingItem = ({ className, isSelected = false, ...rest }: RatingItemProps) => {
  return (
    <span className={cn(s.ratingItem, className)} {...rest}>
      {isSelected ? <StarIcon size={16} /> : <StarOutlinedIcon className={s.test} size={16} />}
    </span>
  )
}
