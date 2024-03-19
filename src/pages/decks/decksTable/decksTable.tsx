import EditOutlinedIcon from '@/assets/icons/components/EditOutlinedIcon'
import PlayCircleOutlinedIcon from '@/assets/icons/components/PlayCircleOutlinedIcon'
import TrashOutlinedIcon from '@/assets/icons/components/TrashOutlinedIcon'
import { Button } from '@/components/ui/button'
import { Pack } from '@/components/ui/pack'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'
import { DecksItem } from '@/pages/decks/decks.types'

type Props = {
  decks?: DecksItem[]
  onDeleteClick?: (id: string) => void
  onEditClick?: (id: string) => void
}
export const DecksTable = ({ decks, onDeleteClick, onEditClick }: Props) => {
  const deleteDeckHandler = (id: string) => onDeleteClick?.(id)
  const editDeckHandler = (id: string) => onEditClick?.(id)

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Cards</TableCell>
          <TableCell>Last Updated</TableCell>
          <TableCell>Created by</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {decks?.map(deck => (
          <TableRow key={deck.id}>
            <TableCell>
              <Pack image={deck.cover}>{deck.name}</Pack>
            </TableCell>
            <TableCell>{deck.cardsCount}</TableCell>
            <TableCell>{deck.updated}</TableCell>
            <TableCell>{deck.author.name}</TableCell>
            <TableCell>
              <div className={'tableActions'}>
                <Button icon={<PlayCircleOutlinedIcon size={16} />} variant={'icon'} />
                <Button
                  icon={<EditOutlinedIcon size={16} />}
                  onClick={() => editDeckHandler(deck.id)}
                  variant={'icon'}
                />
                <Button
                  icon={<TrashOutlinedIcon size={16} />}
                  onClick={() => deleteDeckHandler(deck.id)}
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
