import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TabContent, Tabs } from './'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabs = [
  {
    disabled: false,
    title: 'Tab1',
    value: 'Tab1',
  },
  {
    disabled: false,
    title: 'Tab2',
    value: 'Tab2',
  },
  {
    disabled: true,
    title: 'Tab3',
    value: 'Tab3',
  },
]

const currentValue = 'Tab2'

export const Default: Story = {
  args: { tabs: tabs, value: currentValue },
  render: () => {
    const [value, setValue] = useState(currentValue)

    return (
      <Tabs onValueChange={(value: string) => setValue(value)} tabs={tabs} value={value}>
        <TabContent value={'Tab1'}>Content tab 1</TabContent>
        <TabContent value={'Tab2'}>Content tab 2</TabContent>
        <TabContent value={'Tab3'}>Content tab 3</TabContent>
      </Tabs>
    )
  },
}
