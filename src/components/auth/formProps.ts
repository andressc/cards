import { ComponentProps } from 'react'

export type FormProps<T = {}> = {
  onCloseModal?: () => void
  onValueSubmit: (data: T) => void
} & ComponentProps<'form'>
