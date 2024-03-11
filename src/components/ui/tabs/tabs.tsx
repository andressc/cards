import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import * as TabsRadix from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './tabs.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type TabsProps = {
  children?: ReactNode
  classname?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  tabs: TabType[]
  value?: string
}

export const Tabs = ({
  children,
  classname,
  defaultValue,
  onValueChange,
  tabs,
  value,
}: TabsProps) => (
  <TabsRadix.Root
    className={cn(s.TabsRoot, classname)}
    defaultValue={defaultValue}
    onValueChange={onValueChange}
    value={value}
  >
    <TabsRadix.List className={s.TabsList}>
      {tabs.map(tab => (
        <TabsRadix.Trigger
          className={s.TabsTrigger}
          disabled={tab.disabled}
          key={tab.value}
          value={tab.value}
        >
          <Typography variant={'body1'}>{tab.title}</Typography>
        </TabsRadix.Trigger>
      ))}
    </TabsRadix.List>
    {children}
  </TabsRadix.Root>
)

export type TabContentProps = {
  children: ReactNode
  value: string
}

export const TabContent = ({ children, value }: TabContentProps) => {
  return (
    <TabsRadix.Content className={s.content} value={value}>
      {children}
    </TabsRadix.Content>
  )
}
