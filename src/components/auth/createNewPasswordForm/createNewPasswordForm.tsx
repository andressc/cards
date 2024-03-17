import { useForm } from 'react-hook-form'

import { FormContainer } from '@/components/auth/formContainer'
import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createNewPasswordSchema = z.object({
  password: validations.min3,
})

type FormValues = z.infer<typeof createNewPasswordSchema>

export const CreateNewPasswordForm = ({ onValueSubmit, ...rest }: FormProps<FormValues>) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(createNewPasswordSchema),
  })

  return (
    <FormContainer title={'Create new password'}>
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
    </FormContainer>
  )
}
