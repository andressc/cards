import { SignInForm, SignInFormValues } from '@/components/auth/signInForm'
import { Card } from '@/components/ui/card'

export const SignIn = () => {
  const onValueSubmit = (data: SignInFormValues) => {
    console.log(data)
  }

  return (
    <Card>
      <SignInForm onValueSubmit={onValueSubmit} />
    </Card>
  )
}
