import React from 'react'

import ArrowIosForwardOutlinedIcon from '@/assets/icons/components/ArrowIosForwardOutlinedIcon'
import CheckboxCheckedIcon from '@/assets/icons/components/CheckboxCheckedIcon'
import MenuOutlinedIcon from '@/assets/icons/components/MenuOutlinedIcon'
import MoreHorizontalOutlinedIcon from '@/assets/icons/components/MoreHorizontalOutlinedIcon'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropdownMenu.module.scss'

export const DropdownMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState('pedro')

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <MenuOutlinedIcon />
        </button>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
            New Tab <div className={s.RightSlot}>⌘+T</div>
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
            New Window <div className={s.RightSlot}>⌘+N</div>
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item className={s.DropdownMenuItem} disabled>
            New Private Window <div className={s.RightSlot}>⇧+⌘+N</div>
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Sub>
            <DropdownMenuRadix.SubTrigger className={s.DropdownMenuSubTrigger}>
              More Tools
              <div className={s.RightSlot}>
                <ArrowIosForwardOutlinedIcon />
              </div>
            </DropdownMenuRadix.SubTrigger>
            <DropdownMenuRadix.Portal>
              <DropdownMenuRadix.SubContent
                alignOffset={-5}
                className={s.DropdownMenuSubContent}
                sideOffset={2}
              >
                <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
                  Save Page As… <div className={s.RightSlot}>⌘+S</div>
                </DropdownMenuRadix.Item>
                <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
                  Create Shortcut…
                </DropdownMenuRadix.Item>
                <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
                  Name Window…
                </DropdownMenuRadix.Item>
                <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />
                <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
                  Developer Tools
                </DropdownMenuRadix.Item>
              </DropdownMenuRadix.SubContent>
            </DropdownMenuRadix.Portal>
          </DropdownMenuRadix.Sub>

          <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenuRadix.CheckboxItem
            checked={bookmarksChecked}
            className={s.DropdownMenuCheckboxItem}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuRadix.ItemIndicator className={s.DropdownMenuItemIndicator}>
              <CheckboxCheckedIcon />
            </DropdownMenuRadix.ItemIndicator>
            Show Bookmarks <div className={s.RightSlot}>⌘+B</div>
          </DropdownMenuRadix.CheckboxItem>
          <DropdownMenuRadix.CheckboxItem
            checked={urlsChecked}
            className={s.DropdownMenuCheckboxItem}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuRadix.ItemIndicator className={s.DropdownMenuItemIndicator}>
              <CheckboxCheckedIcon />
            </DropdownMenuRadix.ItemIndicator>
            Show Full URLs
          </DropdownMenuRadix.CheckboxItem>

          <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenuRadix.Label className={s.DropdownMenuLabel}>People</DropdownMenuRadix.Label>
          <DropdownMenuRadix.RadioGroup onValueChange={setPerson} value={person}>
            <DropdownMenuRadix.RadioItem className={s.DropdownMenuRadioItem} value={'pedro'}>
              <DropdownMenuRadix.ItemIndicator className={s.DropdownMenuItemIndicator}>
                <MoreHorizontalOutlinedIcon />
              </DropdownMenuRadix.ItemIndicator>
              Pedro Duarte
            </DropdownMenuRadix.RadioItem>
            <DropdownMenuRadix.RadioItem className={s.DropdownMenuRadioItem} value={'colm'}>
              <DropdownMenuRadix.ItemIndicator className={s.DropdownMenuItemIndicator}>
                <MoreHorizontalOutlinedIcon />
              </DropdownMenuRadix.ItemIndicator>
              Colm Tuite
            </DropdownMenuRadix.RadioItem>
          </DropdownMenuRadix.RadioGroup>

          <DropdownMenuRadix.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
