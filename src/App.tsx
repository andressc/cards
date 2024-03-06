import { ChangeEvent, useState } from 'react'

import PersonIcon from '@/assets/icons/components/PersonIcon'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { TextField } from '@/components/ui/textField'

function App() {
  const [value, setValue] = useState('efwef')
  const [checked, setChecked] = useState(false)

  const [values, setValues] = useState([0, 20])

  const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onCheckedHandler = () => {
    setChecked(v => !v)
  }

  const setValuesHandler = (values: number[]) => {
    setValues(values)
  }

  return (
    <Card>
      <TextField
        disabled
        errorText={'Логин обязателен для заполнения'}
        label={'Введите логин'}
        onChange={setValueHandler}
        onClearClick={() => setValue('')}
        search
        startIcon={<PersonIcon size={20} />}
        value={value}
      />
      <Checkbox checked={checked} disabled label={'QWddqwd'} onChange={onCheckedHandler} />
      <Slider onValueChange={setValuesHandler} value={values} />
    </Card>
  )
}

export default App
