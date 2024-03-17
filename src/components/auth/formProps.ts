import { ComponentProps } from 'react'

export type FormProps<T = {}> = { onValueSubmit: (data: T) => void } & ComponentProps<'form'>
