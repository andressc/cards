import { useForm } from 'react-hook-form'

import avatar from '@/assets/avatar.jpeg'
import { FormProps } from '@/components/auth/formProps'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FormContainer } from '@/components/ui/formContainer'
import { TextField } from '@/components/ui/textField'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createNewPasswordSchema = z.object({
  nickName: validations.min3,
})

type FormValues = z.infer<typeof createNewPasswordSchema>

export const EditProfileForm = ({ onValueSubmit, ...rest }: FormProps<FormValues>) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(createNewPasswordSchema),
  })

  return (
    <FormContainer title={'Personal Information'}>
      <Avatar align={'center'} alt={'Check Email'} size={'large'} src={avatar} />
      <form onSubmit={handleSubmit(onValueSubmit)} {...rest}>
        <TextField
          {...register('nickName')}
          errorText={errors.nickName?.message}
          label={'Nickname'}
        />
        <Button fullWidth type={'submit'}>
          Save Changes
        </Button>
      </form>
    </FormContainer>
  )
}
