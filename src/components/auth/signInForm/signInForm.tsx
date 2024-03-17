import { useController, useForm } from 'react-hook-form'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FormContainer } from '../formContainer'

const loginSchema = z.object({
  email: validations.email,
  password: validations.min3,
  rememberMe: validations.checkbox,
})

type FormValues = z.infer<typeof loginSchema>

export const SignInForm = ({ onValueSubmit, ...rest }: FormProps<FormValues>) => {
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
    <FormContainer
      footerLink={'/'}
      footerTitle={"Don't have an account?"}
      linkTitle={'Sign Up'}
      title={`Sign In`}
    >
      <form onSubmit={handleSubmit(onValueSubmit)} {...rest}>
        <TextField {...register('email')} errorText={errors.email?.message} label={'Email'} />
        <TextField
          {...register('password')}
          errorText={errors.password?.message}
          label={'Password'}
          password
        />
        <Checkbox checked={value} label={'Remember me'} onCheckedChange={onChange} />

        <Typography align={'right'} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button className={'authFormButton'} type={'submit'}>
          Sign In
        </Button>
      </form>
    </FormContainer>
  )
}
