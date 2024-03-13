import type { Meta, StoryObj } from '@storybook/react'

import EditOutlinedIcon from '@/assets/icons/components/EditOutlinedIcon'
import PlayCircleOutlinedIcon from '@/assets/icons/components/PlayCircleOutlinedIcon'
import TrashOutlinedIcon from '@/assets/icons/components/TrashOutlinedIcon'
import { Button } from '@/components/ui/button'
import { Pack } from '@/components/ui/pack'
import { Rating } from '@/components/ui/rating'

import pack from '../../../assets/pack.png'
import { Table, TableBody, TableCell, TableHead, TableRow } from './'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const buttons = (
  <div style={{ display: 'flex', gap: 10 }}>
    <Button icon={<PlayCircleOutlinedIcon size={16} />} variant={'icon'} />
    <Button icon={<EditOutlinedIcon size={16} />} variant={'icon'} />
    <Button icon={<TrashOutlinedIcon size={16} />} variant={'icon'} />
  </div>
)

export const WithControl: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Answer</TableCell>
            <TableCell>Last Updated</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Pack image={pack}>Pack Name</Pack>
            </TableCell>
            <TableCell>This is how This works in JavaScript</TableCell>
            <TableCell>18.03.2021</TableCell>
            <TableCell>
              <Rating setRating={() => {}} value={5} />
            </TableCell>
            <TableCell>{buttons}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Pack image={pack}>Pack Name</Pack>
            </TableCell>
            <TableCell>This is how This works in JavaScript</TableCell>
            <TableCell>18.03.2021</TableCell>
            <TableCell>
              <Rating setRating={() => {}} value={3} />
            </TableCell>
            <TableCell>{buttons}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>This is how This</TableCell>
            <TableCell>This is how This works in JavaScript</TableCell>
            <TableCell>18.03.2021</TableCell>
            <TableCell>
              <Rating setRating={() => {}} value={1} />
            </TableCell>
            <TableCell>{buttons}</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}
