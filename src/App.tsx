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
      <TextField
        label={'label'}
        onChange={setValueHandler}
        onClearClick={() => setValue('')}
        search
        value={value}
      />
    </Card>
  )
}

export default App
