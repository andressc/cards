import { z } from 'zod'

export const validations = {
  checkbox: z.boolean().default(false),
  email: z.string().email(),
  min3: z.string().min(3),
}
