import EditOutlinedIcon from '@/assets/icons/components/EditOutlinedIcon'
import TrashOutlinedIcon from '@/assets/icons/components/TrashOutlinedIcon'
import { Button } from '@/components/ui/button'
import { Pack } from '@/components/ui/pack'
import { Rating } from '@/components/ui/rating'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'
import { CardItem } from '@/pages/cards/cards.types'

type Props = {
  cards?: CardItem[]
  onDeleteClick?: (id: string) => void
  onEditClick?: (id: string) => void
}
export const CardsTable = ({ cards, onDeleteClick, onEditClick }: Props) => {
  const deleteDeckHandler = (id: string) => onDeleteClick?.(id)
  const editDeckHandler = (id: string) => onEditClick?.(id)

  return (
    <Table>
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
        {cards?.map(card => (
          <TableRow key={card.id}>
            <TableCell>
              <Pack image={card.questionImg}>{card.question}</Pack>
            </TableCell>
            <TableCell>
              <Pack image={card.answerImg}>{card.answer}</Pack>
            </TableCell>
            <TableCell>{card.updated}</TableCell>
            <TableCell>
              <Rating setRating={() => {}} value={card.grade} />
            </TableCell>
            <TableCell>
              <div className={'tableActions'}>
                <Button
                  icon={<EditOutlinedIcon size={16} />}
                  onClick={() => editDeckHandler(card.id)}
                  variant={'icon'}
                />
                <Button
                  icon={<TrashOutlinedIcon size={16} />}
                  onClick={() => deleteDeckHandler(card.id)}
                  variant={'icon'}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
