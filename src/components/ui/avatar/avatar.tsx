import { ComponentPropsWithoutRef } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import cn from 'classnames'

import s from './avatar.module.scss'

type AvatarProps = {
  align?: 'center' | 'left' | 'right'
  className?: string
  fallback?: string
  fallbackDelayMs?: number
  size?: 'large' | 'middle' | 'small'
  src?: string
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({
  align = 'left',
  alt = 'userAvatar',
  className,
  fallback = 'AV',
  fallbackDelayMs = 600,
  size = 'small',
  src,
  ...rest
}: AvatarProps) => (
  <div className={cn(s.avatarContainer, s[align])}>
    <AvatarRadix.Root className={cn(s.avatarRoot, s[size])}>
      <AvatarRadix.Image alt={alt} className={cn(s.avatarImage, className)} src={src} {...rest} />
      <AvatarRadix.Fallback className={s.avatarFallback} delayMs={fallbackDelayMs}>
        {fallback}
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  </div>
)
