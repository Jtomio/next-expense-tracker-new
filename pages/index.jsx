import AllCards from '@/src/components/Category/AllCards'
import Header from '@/src/components/Header/Header'
import styles from '@/styles/initial.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
    </main>
  )
}
