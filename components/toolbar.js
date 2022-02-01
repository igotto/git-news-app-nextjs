import styles from '../styles/Toolbar.module.css'
import { useRouter } from 'next/router'

const Toolbar = () => {
  const router = useRouter()
  //console.log('Hi')
  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed/1')}>Feed</div>
      <div onClick={() => router.push('/eom')}>EOM</div>
      <div
        onClick={() => (window.location.href = 'https://twitter.com/igoreact')}
      >
        Twitter
      </div>
    </div>
  )
}

export default Toolbar