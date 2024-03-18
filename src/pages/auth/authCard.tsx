import { ElementType } from 'react'

import { Card } from '@/components/ui/card'

type Props = { component: ElementType }
export const AuthCard = <T = {},>(props: Props) => {
  const { component: Component } = props

  const onValueSubmit = (data: T) => {
    console.log(data)
  }

  return (
    <Card>
      <Component onValueSubmit={onValueSubmit} />
    </Card>
  )
}
