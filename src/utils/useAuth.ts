import { Passage } from '@passageidentity/passage-js'
import { useEffect, useState } from 'react'

import { env } from '../env/server.mjs'
import { useLocalStorage } from './useStorage.js'

const passage = new Passage(env.PASSAGE_APP_ID)

const useWebAuthN = () => {
  const [isAvailable, setIsAvailable] = useState(false)
  useEffect(() => {
    passage
      .appInfo()
      .then((app) => {
        const validConfig = passage.checkWebauthnConfig(app)
        passage
          .isWebauthnSupported(false)
          .then((isSupported) => setIsAvailable(validConfig && isSupported))
      })
      .catch((e) => console.log(e))
  }, [])

  return isAvailable
}

const useAuth = () => {
  const [authToken, setAuthToken, clearAuthToken] = useLocalStorage('authToken')
  const [refreshToken, setRefreshToken, clearRefreshToken] =
    useLocalStorage('refreshToken')

  const webAuthAvailable = useWebAuthN()
  passage.magicLinkActivateWebAuthnLogin

  const login = () => {}
  const register = () => {}
  const getAppInfo = () => {}
  const identifierExists = () => {}
}
