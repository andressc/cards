import { useController, useForm } from 'react-hook-form'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: validations.email,
  password: validations.min3,
  rememberMe: validations.checkbox,
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = ({ onValueSubmit, ...rest }: FormProps<FormValues>) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onValueSubmit)} {...rest}>
      <TextField {...register('email')} errorText={errors.email?.message} label={'Email'} />
      <TextField
        {...register('password')}
        errorText={errors.password?.message}
        label={'Password'}
        type={'password'}
      />
      <Checkbox checked={value} label={'Remember me'} onCheckedChange={onChange} />
      <Button type={'submit'}>Sign In</Button>
    </form>
  )
}
