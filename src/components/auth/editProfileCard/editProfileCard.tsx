import { ComponentProps } from 'react'

import LogOutOutlinedIcon from '@/assets/icons/components/LogOutOutlinedIcon'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import avatar from '../../../assets/avatar.jpeg'
import { AuthContainer } from '../authContainer'

export const EditProfileCard = ({ ...rest }: ComponentProps<'div'>) => {
  return (
    <AuthContainer align={'center'} {...rest} title={'Personal Information'}>
      <Avatar alt={'Check Email'} size={'large'} src={avatar} />
      <Typography variant={'h2'}>Ivan</Typography>
      <Typography color={'secondary'} variant={'body2'}>
        johnson@gmail.com
      </Typography>
      <Button
        className={'authFormButton'}
        icon={<LogOutOutlinedIcon size={16} />}
        variant={'secondary'}
      >
        Logout
      </Button>
    </AuthContainer>
  )
}
