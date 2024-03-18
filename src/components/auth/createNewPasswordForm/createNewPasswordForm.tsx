import { useForm } from 'react-hook-form'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { AuthContainer } from '../authContainer'

const createNewPasswordSchema = z.object({
  password: validations.min3,
})

export type CreateNewPasswordFormValues = z.infer<typeof createNewPasswordSchema>

export const CreateNewPasswordForm = ({
  onValueSubmit,
  ...rest
}: FormProps<CreateNewPasswordFormValues>) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<CreateNewPasswordFormValues>({
    resolver: zodResolver(createNewPasswordSchema),
  })

  return (
    <AuthContainer title={'Create new password'}>
      <form onSubmit={handleSubmit(onValueSubmit)} {...rest}>
        <TextField
          {...register('password')}
          errorText={errors.password?.message}
          label={'Password'}
          password
        />
        <Typography color={'secondary'} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth type={'submit'}>
          Create New Password
        </Button>
      </form>
    </AuthContainer>
  )
}
