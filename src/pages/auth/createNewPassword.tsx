import {
  CreateNewPasswordForm,
  CreateNewPasswordFormValues,
} from '@/components/auth/createNewPasswordForm'
import { Card } from '@/components/ui/card'

export const CreateNewPassword = () => {
  const onValueSubmit = (data: CreateNewPasswordFormValues) => {
    console.log(data)
  }

  return (
    <Card>
      <CreateNewPasswordForm onValueSubmit={onValueSubmit} />
    </Card>
  )
}
