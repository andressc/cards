import { ComponentProps } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import checkEmail from '../../../assets/checkEmail.svg'
import { FormContainer } from '../formContainer'

export const CheckEmailResult = ({ ...rest }: ComponentProps<'div'>) => {
  return (
    <FormContainer {...rest} title={'Check Email'}>
      <Avatar align={'center'} alt={'Check Email'} size={'large'} src={checkEmail} />
      <Typography align={'center'} color={'secondary'} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button as={'a'} className={'authFormButton'} type={'submit'}>
        Back to Sign In
      </Button>
    </FormContainer>
  )
}
