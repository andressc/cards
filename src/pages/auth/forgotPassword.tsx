import { ForgotPasswordForm, ForgotPasswordFormValues } from '@/components/auth/forgotPasswordForm'
import { Card } from '@/components/ui/card'

export const ForgotPassword = () => {
  const onValueSubmit = (data: ForgotPasswordFormValues) => {
    console.log(data)
  }

  return (
    <Card>
      <ForgotPasswordForm onValueSubmit={onValueSubmit} />
    </Card>
  )
}
