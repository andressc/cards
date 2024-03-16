import { useForm } from 'react-hook-form'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signUpSchema = z.object({
  confirmPassword: validations.min3,
  email: validations.email,
  password: validations.min3,
})

type FormValues = z.infer<typeof signUpSchema>

export const SignUpForm = ({ onValueSubmit, ...rest }: FormProps<FormValues>) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
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
      <TextField
        {...register('confirmPassword')}
        errorText={errors.confirmPassword?.message}
        label={'Confirm Password'}
        type={'password'}
      />
      <Button type={'submit'}>Sign Up</Button>
    </form>
  )
}
