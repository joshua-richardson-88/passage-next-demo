import Passage from '@passageidentity/passage-node'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link.js'
import { useEffect } from 'react'
import { env } from '../env/server.mjs'

const Dashboard = ({
  isAuthorized,
  appID,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    require('@passageidentity/passage-elements/passage-profile')
  }, [])

  return (
    <div className='w-screen h-screen bg-neutral-700 text-white p-10'>
      <div className='text-3xl'>
        {isAuthorized ? 'Welcome' : 'Unauthorized'}
      </div>
      {isAuthorized ? (
        <div>
          <passage-profile app-id={appID}></passage-profile>
        </div>
      ) : (
        <div>
          <p className='mb-4'>
            You have not logged in and cannot view the dashboard.
          </p>
          <Link href='/'>Login to continue</Link>
        </div>
      )}
    </div>
  )
}
export default Dashboard

const passage = new Passage({
  appID: env.PASSAGE_APP_ID,
  apiKey: env.PASSAGE_API_KEY,
  authStrategy: 'HEADER',
})

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log('get server side props started')
//   try {
//     const authToken = context.req.cookies['psg_auth_token']

//     if (authToken == null) throw new Error('no auth token in context')
//     console.log('auth token exists')

//     const userId = await passage.authenticateRequest({
//       headers: { authorization: `Bearer ${authToken}` },
//     })

//     console.log('user id: ', userId)

//     if (!userId)
//       return {
//         redirect: { destination: '/', permanent: false },
//       }

//     const { email, phone } = await passage.user.get(userId)
//     const identifier = email ? email : phone

//     return { props: { isAuthorized: true, username: identifier } }
//   } catch (error) {
//     // authentication failed
//     console.log(error)
//     return {
//       redirect: { destination: '/', permanent: false },
//     }
//   }
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const token = context.req.cookies['psg_auth_token']
    if (token == null) throw new Error('no auth token found')

    const req = { headers: { authorization: `Bearer ${token}` } }
    const userID = await passage.authenticateRequest(req)
    if (userID === false) throw new Error('could not validate user token')

    return { props: { isAuthorized: true, appID: env.PASSAGE_APP_ID } }
  } catch (error) {
    console.log(error)
    return { props: { isAuthorized: false, appID: env.PASSAGE_APP_ID } }
  }
}
