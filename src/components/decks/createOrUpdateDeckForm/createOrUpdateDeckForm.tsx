import { useController, useForm } from 'react-hook-form'

import ImageOutlinedIcon from '@/assets/icons/components/ImageOutlinedIcon'
import { FormProps } from '@/components/auth/formProps'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FormContainer } from '@/components/ui/formContainer'
import { TextField } from '@/components/ui/textField'
import { validations } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createOrUpdateDeckSchema = z.object({
  isPrivate: validations.checkbox,
  name: validations.min3,
})

export type CreateOrUpdateDeckFormValues = z.infer<typeof createOrUpdateDeckSchema>

export const CreateOrUpdateDeckForm = ({
  defaultValues,
  onCloseModal,
  onValueSubmit,
  submitButtonTitle,
  ...rest
}: FormProps<CreateOrUpdateDeckFormValues>) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<CreateOrUpdateDeckFormValues>({
    resolver: zodResolver(createOrUpdateDeckSchema),
  })

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: defaultValues?.isPrivate,
    name: 'isPrivate',
  })

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onValueSubmit)} {...rest}>
        <TextField
          label={'Name Pack'}
          {...register('name')}
          defaultValue={defaultValues?.name}
          errorText={errors.name?.message}
        />
        <Button
          fullWidth
          icon={<ImageOutlinedIcon size={16} />}
          type={'button'}
          variant={'secondary'}
        >
          Upload Image
        </Button>
        <Checkbox checked={value} label={'Private pack'} onCheckedChange={onChange} />
        <div style={{ alignItems: 'flex-end', display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={onCloseModal} type={'button'} variant={'secondary'}>
            Cancel
          </Button>
          <Button type={'submit'} variant={'primary'}>
            {submitButtonTitle}
          </Button>
        </div>
      </form>
    </FormContainer>
  )
}
