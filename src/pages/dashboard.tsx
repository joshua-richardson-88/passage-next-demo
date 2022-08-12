import Passage from '@passageidentity/passage-node'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const Dashboard = ({
  isAuthorized,
  username,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const authorizedBody = (
    <>
      You have successfully signed in with Passage.
      <br />
      <br />
      Your username is: <b>{username}</b>
    </>
  )
  const unauthorizedBody = (
    <>
      You have not logged in and cannot view the dashboard.
      <br />
      <br />
      <a href='/' className='ml-5 text-white underline decoration-white'>
        Login to continue.
      </a>
    </>
  )

  return (
    <div className='w-screen h-screen bg-neutral-700 text-white p-10'>
      <div className='styles.title'>
        {isAuthorized ? 'Welcome' : 'Unauthorized'}
      </div>
      <div className='styles.message'>
        {isAuthorized ? authorizedBody : unauthorizedBody}
      </div>
    </div>
  )
}
export default Dashboard

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('get server side props started')
  const passage = new Passage({
    appID: process.env.PASSAGE_APP_ID as string,
    apiKey: process.env.PASSAGE_API_KEY as string,
    authStrategy: 'HEADER',
  })
  try {
    const authToken = context.req.cookies['psg_auth_token']
    const passageRequest = {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    }

    const userId = await passage.authenticateRequest(passageRequest)

    if (userId) {
      const { email, phone } = await passage.user.get(userId)
      const identifier = email ? email : phone
      return { props: { isAuthorized: true, username: identifier } }
    }
    return { props: { isAuthorized: false, username: '' } }
  } catch (error) {
    // authentication failed
    if (error instanceof Error) console.log(`[ERROR]: ${error.message}`)
    return { props: { isAuthorized: false, username: '' } }
  }
}
