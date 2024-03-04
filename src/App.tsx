import { ChangeEvent, useState } from 'react'

import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'

function App() {
  const [value, setValue] = useState('')

  const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <Card>
      <TextField onChange={setValueHandler} value={value} />
    </Card>
  )
}

export default App
