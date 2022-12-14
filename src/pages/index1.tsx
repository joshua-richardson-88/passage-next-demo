import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useEffect } from 'react'
import { env } from '../env/server.mjs'
import Head from 'next/head'
import { Passage } from '@passageidentity/passage-js'

const Home: NextPage = ({
  appId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const passage = new Passage(appId)

  useEffect(() => {
    require('@passageidentity/passage-elements/passage-auth')
  }, [])

  const login = async () => {
    const attempt = await passage.appInfo()
    console.log('attempt: ', attempt)
  }

  return (
    <>
      <Head>
        <title>Passage Demo</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-screen h-screen overscroll-none bg-neutral-800 text-white flex flex-row justify-center items-center'>
        <button className='p-4 bg-blue-600' onClick={login}>
          Login
        </button>
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      appId: env.PASSAGE_APP_ID,
    },
  }
}
