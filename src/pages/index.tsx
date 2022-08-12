import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { trpc } from '../utils/trpc'
import { env } from '../env/server.mjs'
import Banner from '../components/Banner'

const Home: NextPage = ({
  appId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }])

  useEffect(() => {
    require('@passageidentity/passage-elements/passage-auth')
  }, [])

  return (
    <>
      <Head>
        <title>NetOrganizer</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-neutral-800 container mx-auto flex flex-col min-h-screen p-4'>
        <Banner />
        {appId.length != null && <passage-auth app-id={appId} />}
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