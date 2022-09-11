import { env } from '../../../env/server.mjs'

import make_login_webauthn_finish from './login/webauthn/finish'
import make_login_webauthn_start from './login/webauthn/start'
import make_register_webauthn_finish from './register/webauthn/finish'
import make_register_webauthn_start from './register/webauthn/start'

const base_url = 'https://auth.passage.id/v1/apps'

const login_webauthn_finish = make_login_webauthn_finish(
  base_url,
  env.PASSAGE_APP_ID,
)
const login_webauthn_start = make_login_webauthn_start(
  base_url,
  env.PASSAGE_APP_ID,
)
const register_webauthn_finish = make_register_webauthn_finish(
  base_url,
  env.PASSAGE_APP_ID,
)
const register_webauthn_start = make_register_webauthn_start(
  base_url,
  env.PASSAGE_APP_ID,
)

export {
  login_webauthn_finish,
  login_webauthn_start,
  register_webauthn_finish,
  register_webauthn_start,
}
