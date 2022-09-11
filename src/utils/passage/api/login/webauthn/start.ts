import { pipe } from 'fp-ts/lib/function'
import { of } from 'fp-ts/lib/Task'
import { chainW, foldW } from 'fp-ts/lib/TaskEither'
import { z } from 'zod'

import { validator } from '../../../validator'
import fpFetch from '../../../fp-fetch'
import { user } from '../../user'

const allowCredential = z.object({
  id: z.string(),
  transports: z.array(z.string()).optional(),
  type: z.string(),
})
const publicKey = z.object({
  challenge: z.string(),
  extensions: z.object({}).optional(),
  rpId: z.string(),
  timeout: z.number(),
  userVerification: z.string().optional(),
  allowCredentials: z.array(allowCredential),
})
const challenge = z.object({ publicKey })
const handshake = z.object({ id: z.string(), challenge })
const webAuthnStartResponse = z.object({ handshake, user })
const validate = validator(webAuthnStartResponse)

/**
 * @description Initiate a WebAuthn login for a user
 * @returns A WebAuthn credential assertion challenge that is used to perform
 *    the login ceremony from the browser
 */
const makeStart =
  (base_url: string, app_id: string) => async (identifier: string) =>
    await pipe(
      fpFetch({
        u: `${base_url}/${app_id}/login/webauthn/start`,
        o: {
          body: JSON.stringify({ identifier }),
          method: 'POST',
        },
      }),
      chainW(validate),
      foldW(of, of),
    )()

export default makeStart
export type WebAuthnStartResponse = z.TypeOf<typeof webAuthnStartResponse>
export type allowCredential = z.TypeOf<typeof allowCredential>
/**
 * @param challenge
 *    The byte slice version of AttestationObject.
 *
 *    This attribute contains an attestation object, which is opaque to, and
 *    cryptographically protected against tampering by, the client. The
 *    attestation object contains both authenticator data and an attestation
 *    statement.
 * @param userVerification
 *    The Relying Party's requirements regarding user verification for the
 *    create() operation. Eligible authenticators are filtered to only those
 *    capable of satisfying this requirement.
 */

export type PublicKey = z.TypeOf<typeof publicKey>
export type Challenge = z.TypeOf<typeof challenge>
export type Handshake = z.TypeOf<typeof handshake>
