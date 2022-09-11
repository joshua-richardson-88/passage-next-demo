import { pipe } from 'fp-ts/lib/function'
import { of } from 'fp-ts/lib/Task'
import { chainW, foldW } from 'fp-ts/lib/TaskEither'
import { z } from 'zod'

import { validator } from '../../../validator'
import fpFetch from '../../../fp-fetch'

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
 *    Completes a WebAuthn login and authenticate the user. This endpoint
 *    accepts and verifies the response from `navigator.credential.get()`
 * @returns An authentication token for the user.
 */
const makeFinish = (base_url: string, app_id: string) => async (args: Body) =>
  await pipe(
    fpFetch({
      u: `${base_url}/${app_id}/login/webauthn/finish`,
      o: {
        body: JSON.stringify(args),
        method: 'POST',
      },
    }),
    chainW(validate),
    foldW(of, of),
  )()

export default makeFinish
export type AuthResult = z.TypeOf<typeof authResult>
export type FinishWebAuthnResponse = z.TypeOf<typeof response>
/**
 * @param handshake_response.id
 *    The credential’s identifier.
 *    The requirements for the identifier are distinct for each type of
 *    credential. It might represent a username for username/password tuples,
 *    for example.
 * @param handshake_response.type
 *    The value of the object’s interface object's [[type]] slot, which
 *    specifies the credential type represented by this object. This should be
 *    type "public-key" for Webauthn credentials.
 * @param handshake_response.response.authenticatorData
 *    Contains the AAGUID, a unique credential ID, and the credential public key
 * @param handshake_response.response.clientDataJSON
 *    From the [spec](https://www.w3.org/TR/webauthn/#dom-authenticatorresponse-clientdatajson).
 *    This attribute contains a JSON serialization of the client data passed to
 *    the authenticator by the client in its call to either create() or get().
 */
export type Body = {
  handshake_id: string
  user_id: string
  handshake_response: {
    rawID?: string
    id?: string
    type?: string
    response: {
      authenticatorData: number[]
      clientDataJSON?: string
      signature: number[]
      userHandle: number[]
    }
  }
}
