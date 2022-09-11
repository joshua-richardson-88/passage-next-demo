import { pipe } from 'fp-ts/lib/function'
import { of } from 'fp-ts/lib/Task'
import { chainW, foldW } from 'fp-ts/lib/TaskEither'
import { z } from 'zod'

import { validator } from '../../../validator'
import { user } from '../../user'
import fpFetch from '../../../fp-fetch'

const authenticatorSelection = z.object({
  authenticatorAttachment: z.enum(['platform', 'cross-platform']),
  requireResidentKey: z.boolean(),
  residentKey: z.string(),
  userVerification: z.string(),
})
const excludeCredential = z.object({
  id: z.array(z.number()),
  transports: z.array(z.string()),
  type: z.string(),
})
const extensions = z.object({})
const pubKeyCredParam = z.object({
  alg: z.number(),
  type: z.string(),
})
const rp = z.object({
  icon: z.string(),
  id: z.string(),
  name: z.string(),
})
const userData = z.object({
  displayName: z.string(),
  icon: z.string(),
  id: z.array(z.number()),
  name: z.string(),
})
const publicKey = z.object({
  attestation: z.string(),
  authenticatorSelection,
  challenge: z.array(z.number()),
  excludeCredentials: z.array(excludeCredential),
  extensions,
  pubKeyCredParams: z.array(pubKeyCredParam),
  rp,
  timeout: z.number(),
  user: userData,
})
const challenge = z.object({ publicKey })
const handshake = z.object({ id: z.string(), challenge })
const response = z.object({
  handshake,
  user,
})
const validate = validator(response)

/**
 * @description Initiate a WebAuthn registration and create the user
 * @returns A WebAuthn credential creation challenge that is used to perform
 *    the registration ceremony from the browser.
 */
const makeStart =
  (base_url: string, app_id: string) => async (identifier: string) =>
    await pipe(
      fpFetch({
        u: `${base_url}/${app_id}/register/webauthn/start`,
        o: {
          body: JSON.stringify({ identifier }),
          method: 'POST',
        },
      }),
      chainW(validate),
      foldW(of, of),
    )()

export default makeStart
/**
 * @param authenticatorAttachment
 *    If this member is present, eligible authenticators are filtered to only
 *    authenticators attached with the specified AuthenticatorAttachment enum
 * @param requireResidentKey
 *    The Relying Party's requirements regarding resident credentials. If the
 *    parameter is set to true, the authenticator MUST create a
 *    client-side-resident public key credential source when creating a public
 *    key credential.
 * @param residentKey
 *    The Relying Party's requirements regarding resident credentials per
 *    Webauthn Level 2.
 * @param userVerification
 *    The Relying Party's requirements regarding user verification for the
 *    create() operation. Eligible authenticators are filtered to only those
 *    capable of satisfying this requirement.
 */
export type RegisterWebauthnStartAuthenticatorSelection = z.TypeOf<
  typeof authenticatorSelection
>
export type RegisterWebauthnStartChallenge = z.TypeOf<typeof challenge>
export type RegisterWebauthnStartExtensions = z.TypeOf<typeof extensions>
/**
 * @param id CredentialID The ID of a credential to allow/disallow
 * @param transports The authenticator transports that can be used
 * @param type The valid credential types
 */
export type RegisterWebauthnStartExcludeCredential = z.TypeOf<
  typeof excludeCredential
>
export type RegisterWebauthnStartHandshake = z.TypeOf<typeof handshake>
export type RegisterWebauthnStartPubKeyCredParam = z.TypeOf<
  typeof pubKeyCredParam
>
export type RegisterWebauthnStartPublicKey = z.TypeOf<typeof publicKey>
export type RegisterWebauthnStartResponse = z.TypeOf<typeof response>
/**
 * @param icon
 *    A serialized URL which resolves to an image associated with the entity.
 *
 *    For example, this could be a user’s avatar or a Relying Party's logo.
 *    * This URL MUST be an a priori authenticated URL.
 *    * Authenticators MUST accept and store a 128-byte minimum length for an
 *      icon member’s value.
 *    * Authenticators MAY ignore an icon member’s value if its length is
 *      greater than 128 bytes.
 *    * The URL’s scheme MAY be "data" to avoid fetches of the URL, at the cost
 *      of needing more storage.
 * @param id
 *    A unique identifier for the Relying Party entity, which sets the RP ID.
 * @param name
 *    A human-palatable name for the entity. Its function depends on what the
 *    PublicKeyCredentialEntity represents:
 *
 *    * When inherited by PublicKeyCredentialRpEntity it is a human-palatable
 *      identifier for the Relying Party, intended only for display. For
 *      example, "ACME Corporation", or "Wonderful Widgets, Inc."
 *    * When inherited by PublicKeyCredentialUserEntity, it is a human-palatable
 *      identifier for a user account. It is intended only for display, i.e.,
 *      aiding the user in determining the difference between user accounts with
 *      similar displayNames. For example, "alexm", "alex.p.mueller@example.com"
 *      or "+14255551234".
 *
 */
export type RegisterWebauthnStartRP = z.TypeOf<typeof rp>
/**
 * @param displayName
 *    A human-palatable name for the user account, intended only for display.
 *    For example, "Alex P. Müller" or "田中 倫".
 *
 *    * The Relying Party SHOULD let the user choose this
 *    * and SHOULD NOT restrict the choice more than necessary.
 * @param icon
 *    A serialized URL which resolves to an image associated with the entity.
 *    For example, this could be a user’s avatar or a Relying Party's logo.
 *
 *    * This URL MUST be an a priori authenticated URL.
 *    * Authenticators MUST accept and store a 128-byte minimum length for an
 *      icon member’s value.
 *    * Authenticators MAY ignore an icon member’s value if its length is
 *      greater than 128 bytes.
 *    * The URL’s scheme MAY be "data" to avoid fetches of the URL, at the cost
 *      of needing more storage.
 * @param id
 *    ID is the user handle of the user account entity. To ensure secure
 *    operation, authentication and authorization decisions MUST be made on the
 *    basis of this id member, not the displayName nor name members. See
 *    Section 6.1 of [RFC8266](https://www.w3.org/TR/webauthn/#biblio-rfc8266).
 * @param name
 *    A human-palatable name for the entity. Its function depends on what the
 *    PublicKeyCredentialEntity represents:
 *    * When inherited by PublicKeyCredentialRpEntity it is a human-palatable
 *      identifier for the Relying Party, intended only for display. For
 *      example, "ACME Corporation" or "Wonderful Widgets, Inc."
 *    * When inherited by PublicKeyCredentialUserEntity, it is a
 *      human-palatable identifier for a user account. It is intended only for
 *      display, i.e., aiding the user in determining the difference between
 *      user accounts with similar displayNames. For example, "alexm",
 *      "alex.p.mueller@example.com" or "+14255551234".
 */
export type RegisterWebauthnStartUser = z.TypeOf<typeof userData>
