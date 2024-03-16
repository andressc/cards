import { useForm } from 'react-hook-form'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: validations.email,
})

type FormValues = z.infer<typeof forgotPasswordSchema>

export const ForgotPasswordForm = ({ onValueSubmit, ...rest }: FormProps<FormValues>) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  return (
    <form onSubmit={handleSubmit(onValueSubmit)} {...rest}>
      <TextField {...register('email')} errorText={errors.email?.message} label={'Email'} />
      <Typography variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button type={'submit'}>Send Instructions</Button>
    </form>
  )
}
