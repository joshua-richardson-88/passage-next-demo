import { login_webauthn_start } from './passage/api'
import { PublicKey } from './passage/api/login/webauthn/start'

interface WebAuthnStartResponse {
  handshake: {
    id: string
    challenge: {
      publicKey: {
        allowCredentials: {
          /* CredentialID The ID of a credential to allow/disallow */
          id: number[]
          /* The authenticator transports that can be used */
          transports: string[]
          /* The valid credential types. */
          type: string
        }[]
        /* The byte slice version of AttestationObject This attribute contains an attestation object, which is opaque to, and cryptographically protected against tampering by, the client. The attestation object contains both authenticator data and an attestation statement. The former contains the AAGUID, a unique credential ID, and the credential public key. The contents of the attestation statement are determined by the attestation statement format used by the authenticator. It also contains any additional information that the Relying Party's server requires to validate the attestation statement, as well as to decode and validate the authenticator data along with the JSON-serialized client data. */
        challenge: number[]
        extensions: {}
        rpId: string
        timeout: number
        /* UserVerification: This member describes the Relying Party's requirements regarding user verification for the create() operation. Eligible authenticators are filtered to only those capable of satisfying this requirement. */
        userVerification: string
      }
    }
  }
  user: {
    email: string
    /* Whether or not the user's email has been verified */
    email_verified: boolean
    id: string
    phone: string
    /* Whether or not the user's phone has been verified */
    phone_verified: boolean
    /* User status: active, inactive, pending */
    status: string
    user_metadata: {}
    webauthn: boolean
    webauthn_types: string[]
  }
}

// ByteManipulator
class d {
  encodeBytes(e: any) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')
  }
  decodeBytes(e: any) {
    let t = e.replace(/-/g, '+').replace(/_/g, '/').replace(/=+$/, '')
    return Uint8Array.from(atob(t), (s) => s.charCodeAt(0))
  }
}
// PassageError
class r extends Error {
  statusCode: number
  statusText: string

  constructor(t: string, i: { status: number; statusText: string }) {
    super()
    this.name = 'PassageError'
    this.statusCode = i.status
    this.statusText = i.statusText
    this.message = this._parsePsgErrorResponse(t)
  }

  _parsePsgErrorResponse(t: any) {
    try {
      return (t = JSON.parse(t)), t.error ? t.error : ''
    } catch (error) {
      return t
    }
  }
}
class h {
  A: d
  constructor() {
    this.A = new d()
  }
  _isLocalHost() {
    return Boolean(
      window.location.hostname === 'localhost' ||
        window.location.hostname === '[::1]' ||
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
        ),
    )
  }
  _isHttps() {
    return location.protocol === 'https:'
  }
  setAuthToken(e: any) {
    localStorage.setItem('psg_auth_token', e)
    let t = !this._isHttps() && this._isLocalHost()
    document.cookie = `psg_auth_token = ${e}; path=/ ${t ? '' : ';secure'}`
  }
  deleteAuthToken() {
    localStorage.removeItem('psg_auth_token')
    document.cookie = 'psg_auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
  }
  async psgCredIDExists(e: any) {
    const t = e.user.id
    const i = e.handshake.challenge.publicKey.allowCredentials
    const s = localStorage.getItem('psg_cred_obj')

    if (!s)
      throw new r('Could not get psg_cred_obj', {
        status: 700,
        statusText: 'PSG Cred Object Does Not Exist',
      })
    const c = JSON.parse(s)[t]

    return i.find((L: any) => {
      if (
        this.A.encodeBytes(this.A.decodeBytes(L.id)) ===
        this.A.encodeBytes(this.A.decodeBytes(c))
      )
        return true
    })
  }
  setPsgCredID(e: any, t: any) {
    if (!t)
      throw new r("Couldn't get user's credential", {
        status: 703,
        statusText: 'PSG Could Not Get User Credential',
      })

    const i = localStorage.getItem('psg_cred_obj')
    if (i) {
      const s = JSON.parse(i)
      s[e] = t == null ? undefined : t.id
      localStorage.setItem('psg_cred_obj', JSON.stringify(s))
    } else {
      localStorage.setItem(
        'psg_cred_obj',
        JSON.stringify({
          [e]: t == null ? undefined : t.id,
        }),
      )
    }
  }
}
class _ {
  b: d
  X: h
  apiUrl: string
  identifier: string

  constructor(e: string, t: string) {
    this.b = new d()
    this.X = new h()
    this.apiUrl = e + '/register/'
    this.identifier = t
  }

  async withWebAuthn() {
    try {
      const a = await login_webauthn_start(this.identifier)
      if (a.__type !== 'data') throw a

      const t = await navigator.credentials.create({
        publicKey: this._parsePublicKey(a.data.handshake.challenge.publicKey),
      })
    } catch (error) {}
    const e = await fetch(this.apiUrl + 'webauthn/start', {
      body: JSON.stringify({ identifier: this.identifier }),
      method: 'POST',
    })
    const t = await navigator.credentials
      .create({
        publicKey: this._parsePublicKey(e.handshake.challenge.publicKey),
      })
      .catch((l: any) => {
        throw new r('error parsing public key for webAuthn', {
          status: 702,
          statusText: 'PSG Parse Public Key For Login Failed',
        })
      })
      .then((l) => l)
    const i = new Uint8Array(
      t == null ? undefined : t.respose.attestationObject,
    )
  }
  _parsePublicKey(e: PublicKey) {
    e.challenge = this.b.decodeBytes(e.challenge.toString())
    e.user.id = this.b.decodeBytes(e.user.id.toString())
    return e
  }
}

export {}
