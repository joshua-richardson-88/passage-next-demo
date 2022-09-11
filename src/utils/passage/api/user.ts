import { z } from 'zod'

export const user = z.object({
  email: z.string(),
  email_verified: z.boolean(),
  id: z.string(),
  phone: z.string(),
  phone_verified: z.boolean(),
  status: z.enum(['active', 'inactive', 'pending']),
  user_metadata: z.object({}).nullable(),
  webauthn: z.boolean(),
  webauthn_types: z.string().nullable(),
})

/**
 * @param email_verified
 *    Whether or not the user's email has been verified
 * @param phone_verified
 *    Whether or not the user's phone has been verified
 * @param status
 */
export type User = z.TypeOf<typeof user>
