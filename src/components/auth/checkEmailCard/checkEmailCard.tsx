import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { pathRoutes } from '@/router'

import checkEmail from '../../../assets/checkEmail.svg'
import { AuthContainer } from '../authContainer'

export const CheckEmailCard = ({ ...rest }: ComponentProps<'div'>) => {
  return (
    <AuthContainer align={'center'} {...rest} title={'Check Email'}>
      <Avatar alt={'Check Email'} size={'large'} src={checkEmail} />
      <Typography align={'center'} color={'secondary'} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button as={Link} className={'authFormButton'} fullWidth to={pathRoutes.login}>
        Back to Sign In
      </Button>
    </AuthContainer>
  )
}
