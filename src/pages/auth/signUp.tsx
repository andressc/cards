import { SignUpForm, SignUpFormValues } from '@/components/auth/signUpForm'
import { Card } from '@/components/ui/card'

export const SignUp = () => {
  const onValueSubmit = (data: SignUpFormValues) => {
    console.log(data)
  }

  return (
    <Card>
      <SignUpForm onValueSubmit={onValueSubmit} />
    </Card>
  )
}
