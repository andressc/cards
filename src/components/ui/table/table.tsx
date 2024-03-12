import { ComponentProps } from 'react'

import cn from 'classnames'

import s from './table.module.scss'

export const Table = ({ className, ...rest }: ComponentProps<'table'>) => {
  return <table className={cn(s.table, className)} {...rest} />
}

export const TableHead = ({ className, ...rest }: ComponentProps<'thead'>) => (
  <thead className={cn(s.tableHead, className)} {...rest} />
)

export const TableBody = ({ className, ...rest }: ComponentProps<'tbody'>) => (
  <tbody className={cn(s.tableBody, className)} {...rest} />
)

export const TableRow = ({ className, ...rest }: ComponentProps<'tr'>) => (
  <tr className={cn(s.tableRow, className)} {...rest} />
)

export const TableCell = ({ className, ...rest }: ComponentProps<'td'>) => (
  <td className={cn(s.tableCell, className)} {...rest} />
)
