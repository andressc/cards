import CloseOutlinedIcon from '@/assets/icons/components/CloseOutlinedIcon'
import * as DialogRadix from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export const Modal = () => (
  <DialogRadix.Root>
    <DialogRadix.Trigger asChild>
      <button className={s.Button}>Edit profile</button>
    </DialogRadix.Trigger>
    <DialogRadix.Portal>
      <DialogRadix.Overlay className={s.DialogOverlay} />
      <DialogRadix.Content className={s.DialogContent}>
        <div>
          <DialogRadix.Title className={s.DialogTitle}>Edit profile</DialogRadix.Title>
          <DialogRadix.Close asChild>
            <button aria-label={'Close'} className={s.IconButton}>
              <CloseOutlinedIcon />
            </button>
          </DialogRadix.Close>
        </div>
        <DialogRadix.Description className={s.DialogDescription}>
          Make changes to your profile here. Click save when youre done.
        </DialogRadix.Description>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor={'name'}>
            Name
          </label>
          <input className={s.Input} defaultValue={'Pedro Duarte'} id={'name'} />
        </fieldset>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor={'username'}>
            Username
          </label>
          <input className={s.Input} defaultValue={'@peduarte'} id={'username'} />
        </fieldset>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 25 }}>
          <DialogRadix.Close asChild>
            <button className={s.Button}>Save changes</button>
          </DialogRadix.Close>
        </div>
      </DialogRadix.Content>
    </DialogRadix.Portal>
  </DialogRadix.Root>
)
