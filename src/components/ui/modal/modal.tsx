import { ComponentProps } from 'react'

import CloseOutlinedIcon from '@/assets/icons/components/CloseOutlinedIcon'
import { Typography } from '@/components/ui/typography'
import * as DialogRadix from '@radix-ui/react-dialog'
import cn from 'classnames'

import s from './modal.module.scss'

export type ModalProps = {
  onClose?: () => void
  open: boolean
  showCloseButton?: boolean
  title?: string
} & ComponentProps<'div'>

export const Modal = ({
  children,
  className,
  onClose,
  open = false,
  showCloseButton = true,
  title,
}: ModalProps) => (
  <DialogRadix.Root onOpenChange={onClose} open={open}>
    <DialogRadix.Portal>
      <DialogRadix.Overlay className={s.dialogOverlay} />
      <DialogRadix.Content className={cn(s.dialogContent, className)}>
        {(showCloseButton || title) && (
          <div className={s.dialogHeader}>
            <DialogRadix.Title asChild className={s.dialogTitle}>
              <Typography variant={'h3'}>{title}</Typography>
            </DialogRadix.Title>
            {showCloseButton && (
              <DialogRadix.Close asChild>
                <button aria-label={'Close'} className={s.iconButton}>
                  <CloseOutlinedIcon />
                </button>
              </DialogRadix.Close>
            )}
          </div>
        )}
        <div className={s.contentBox}>{children}</div>
      </DialogRadix.Content>
    </DialogRadix.Portal>
  </DialogRadix.Root>
)
