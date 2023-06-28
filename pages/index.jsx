import { useDispatch } from 'react-redux'
import AllCards from '@/src/components/Category/AllCards'
import Header from '@/src/components/Header/Header'
import Charts from '@/src/components/charts/Charts'
import useGetDocs from '@/src/hooks/useGetDoc'
import styles from '../styles/initial.module.scss'
import { setCategories, setTransactions } from '@/src/store/app-slice'
import Transactions from '@/src/components/Transactions/Transactions'

export default function Home() {
  const dispatch = useDispatch()
  dispatch(setCategories(useGetDocs('categorias')))
  dispatch(setTransactions(useGetDocs('transactions')))

  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
      <Charts />
      <Transactions />
    </main>
  )
}
