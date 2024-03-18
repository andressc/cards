import { useForm } from 'react-hook-form'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { pathRoutes } from '@/router'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { AuthContainer } from '../authContainer'

const forgotPasswordSchema = z.object({
  email: validations.email,
})

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

export const ForgotPasswordForm = ({
  onValueSubmit,
  ...rest
}: FormProps<ForgotPasswordFormValues>) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  return (
    <AuthContainer
      footerLink={pathRoutes.login}
      footerTitle={'Did you remember your password?'}
      linkTitle={'Try logging in'}
      title={'Forgot your password?'}
    >
      <form onSubmit={handleSubmit(onValueSubmit)} {...rest}>
        <TextField {...register('email')} errorText={errors.email?.message} label={'Email'} />
        <Typography color={'secondary'} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
    </AuthContainer>
  )
}
