import { ComponentProps } from 'react'

export type FormProps<T = {}> = {
  defaultValues?: T
  onCloseModal?: () => void
  onValueSubmit: (data: T) => void
  submitButtonTitle?: string
} & ComponentProps<'form'>
