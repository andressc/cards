import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

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
]

const commonArgs = {
  children: (
    <>
      <Select
        defaultValue={'select2'}
        label={'Select-box'}
        onValueChange={() => {}}
        selectItems={selectItems}
      />
      <TextField label={'input'} />
      <TextField label={'input'} />
      <Checkbox checked label={'Check-box'} onChange={() => {}} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant={'secondary'}>Button secondary</Button>
        <Button variant={'primary'}>Button primary</Button>
      </div>
    </>
  ),
  open: true,
  title: 'Title',
}

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>OpenModal</Button>
        <Modal onClose={() => setIsOpen(false)} title={'Wedfwef'} {...args} open={isOpen} />
      </>
    )
  },
}

export const WithoutCloseButton: Story = {
  args: {
    ...commonArgs,
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>OpenModal</Button>
        <Modal
          onClose={() => setIsOpen(false)}
          showCloseButton={false}
          title={'Wedfwef'}
          {...args}
          open={isOpen}
        />
      </>
    )
  },
}
