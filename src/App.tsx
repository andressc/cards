import { ChangeEvent, useState } from 'react'

import PersonIcon from '@/assets/icons/components/PersonIcon'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { RadioGroup } from '@/components/ui/radioGroup'
import { Select } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { TextField } from '@/components/ui/textField'

import HeartIcon from './assets/icons/components/HeartIcon'

function App() {
  const [value, setValue] = useState('efwef')
  const [checked, setChecked] = useState(false)

  const [values, setValues] = useState([0, 20])
  const [isOpen, setIsOpen] = useState(false)

  const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onCheckedHandler = () => {
    setChecked(v => !v)
  }

  const setValuesHandler = (values: number[]) => {
    setValues(values)
  }

  const onValueChange = (value: string) => {
    console.log(value)
  }

  const options = [
    {
      label: 'RadioGroup1',
      value: 'RadioGroupValue1',
    },
    {
      label: 'RadioGroup2',
      value: 'RadioGroupValue2',
    },
    {
      label: 'RadioGroup3',
      value: 'RadioGroupValue3',
    },
  ]

  const selectItems = [
    {
      label: 'select1',
      value: 'select1',
    },
    {
      label: 'select2',
      value: 'select2',
    },
    {
      disabled: true,
      label: 'select3',
      value: 'select3',
    },
    {
      label: 'select4',
      value: 'select4',
    },
    {
      label: 'select5',
      value: 'select5',
    },
    {
      label: 'select6',
      value: 'select6',
    },
    {
      label: 'select7',
      value: 'select7',
    },
    {
      label: 'select8',
      value: 'select8',
    },
  ]

  return (
    <>
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
        <Checkbox checked={checked} label={'QWddqwd'} onChange={onCheckedHandler} />
        <Slider onValueChange={setValuesHandler} value={values} />
        <RadioGroup
          defaultValue={'RadioGroupValue3'}
          disabled
          onValueChange={onValueChange}
          options={options}
        />
        <Select
          label={'Select-box'}
          onValueChange={() => {}}
          placeholder={'dwdweefdwef'}
          selectItems={selectItems}
        />
        <Button icon={<HeartIcon />} variant={'primary'}>
          Анюта
        </Button>
        <TextField errorText={'error'} />

        <Button onClick={() => setIsOpen(true)}>OpenModal</Button>
        <Modal
          onClose={() => setIsOpen(false)}
          open={isOpen}
          showCloseButton={false}
          title={'Title'}
        />
      </Card>
    </>
  )
}

export default App
