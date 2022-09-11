import { pipe } from 'fp-ts/lib/function'
import { of } from 'fp-ts/lib/Task'
import { chainW, foldW } from 'fp-ts/lib/TaskEither'
import { z } from 'zod'

import { validator } from '../../../validator'
import fpFetch from '../../../fp-fetch'

import type { Body } from '../../login/webauthn/finish'

const authResult = z.object({
  auth_token: z.string(),
  redirect_url: z.string(),
  refresh_token: z.string(),
  refresh_token_expiration: z.number(),
})
const response = z.object({
  auth_result: authResult,
})
const validate = validator(response)

/**
 * @description
 *    Completes a WebAuthn registration and authenticate the user. This
 *    endpoint accepts and verifies the response from
 *    `navigator.credential.create()`
 * @returns An authentication token for the user.
 */
const makeFinish = (base_url: string, app_id: string) => async (args: Body) =>
  await pipe(
    fpFetch({
      u: `${base_url}/${app_id}/register/webauthn/finish`,
      o: {
        body: JSON.stringify(args),
        method: 'POST',
      },
    }),
    chainW(validate),
    foldW(of, of),
  )()

export default makeFinish
export type RegisterWebauthnFinishAuthResult = z.TypeOf<typeof authResult>
export type RegisterWebauthnFinishResponse = z.TypeOf<typeof response>
