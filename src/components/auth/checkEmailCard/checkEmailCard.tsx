import { ComponentProps } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import checkEmail from '../../../assets/checkEmail.svg'
import { FormContainer } from '../formContainer'

export const CheckEmailCard = ({ ...rest }: ComponentProps<'div'>) => {
  return (
    <FormContainer align={'center'} {...rest} title={'Check Email'}>
      <Avatar alt={'Check Email'} size={'large'} src={checkEmail} />
      <Typography align={'center'} color={'secondary'} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button as={'a'} className={'authFormButton'} fullWidth>
        Back to Sign In
      </Button>
    </FormContainer>
  )
}
