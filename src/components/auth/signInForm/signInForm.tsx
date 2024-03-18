import { useController, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { pathRoutes } from '@/router'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { AuthContainer } from '../authContainer'

const signInSchema = z.object({
  email: validations.email,
  password: validations.min3,
  rememberMe: validations.checkbox,
})

export type SignInFormValues = z.infer<typeof signInSchema>

export const SignInForm = ({ onValueSubmit, ...rest }: FormProps<SignInFormValues>) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  })

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <AuthContainer
      footerLink={pathRoutes.registration}
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

        <Typography
          align={'right'}
          as={Link}
          style={{ cursor: 'pointer' }}
          to={pathRoutes.forgotPassword}
          variant={'body2'}
        >
          Forgot Password?
        </Typography>
        <Button className={'authFormButton'} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
    </AuthContainer>
  )
}
