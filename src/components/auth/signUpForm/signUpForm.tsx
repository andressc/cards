import { useForm } from 'react-hook-form'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FormContainer } from '../formContainer'

const signUpSchema = z
  .object({
    confirmPassword: validations.min3,
    email: validations.email,
    password: validations.min3,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
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
    <FormContainer
      footerLink={'/'}
      footerTitle={'Already have an account?'}
      linkTitle={'Sign In'}
      title={'Sign Up'}
    >
      <form onSubmit={handleSubmit(onValueSubmit)} {...rest}>
        <TextField {...register('email')} errorText={errors.email?.message} label={'Email'} />
        <TextField
          {...register('password')}
          errorText={errors.password?.message}
          label={'Password'}
          password
        />
        <TextField
          {...register('confirmPassword')}
          errorText={errors.confirmPassword?.message}
          label={'Confirm Password'}
          password
        />
        <Button type={'submit'}>Sign Up</Button>
      </form>
    </FormContainer>
  )
}
