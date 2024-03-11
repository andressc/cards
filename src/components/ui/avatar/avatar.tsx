import { ComponentPropsWithoutRef } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import cn from 'classnames'

import s from './avatar.module.scss'

type AvatarProps = {
  className?: string
  fallback?: string
  fallbackDelayMs?: number
  src?: string
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({
  alt = 'userAvatar',
  className,
  fallback = 'AV',
  fallbackDelayMs = 600,
  src,
  ...rest
}: AvatarProps) => (
  <AvatarRadix.Root className={s.avatarRoot}>
    <AvatarRadix.Image alt={alt} className={cn(s.avatarImage, className)} src={src} {...rest} />
    <AvatarRadix.Fallback className={s.avatarFallback} delayMs={fallbackDelayMs}>
      {fallback}
    </AvatarRadix.Fallback>
  </AvatarRadix.Root>
)
