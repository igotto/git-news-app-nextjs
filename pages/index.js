import Head from 'next/head'
import Image from 'next/image'
import Toolbar from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='page-container'>
        <Toolbar />
        <div className={styles.main}>
          <h1>Next JS News App</h1>
          <h3>Your one stop shop for the latest news article</h3>
        </div>
      </div>
    </div>
  )
}
