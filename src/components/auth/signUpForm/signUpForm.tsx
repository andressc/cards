import { useForm } from 'react-hook-form'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { pathRoutes } from '@/router'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { AuthContainer } from '../authContainer'

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

export type SignUpFormValues = z.infer<typeof signUpSchema>

export const SignUpForm = ({ onValueSubmit, ...rest }: FormProps<SignUpFormValues>) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  })

  return (
    <AuthContainer
      footerLink={pathRoutes.login}
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
        <Button fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
    </AuthContainer>
  )
}
