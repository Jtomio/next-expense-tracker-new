import React from 'react'
import styles from './AllCards.module.scss'
import CategoryCard from './CategoryCard'
import NoCard from './NoCard'
import AddAmount from './modais/AddAmount'
import SubtractAmount from './modais/SubtractAmount'
import TransferAmount from './modais/TransferAmount'
import EditCategory from './modais/EditCategory'
import AddCategory from './modais/AddCategory'

const DUMMY_DATA = [
  { id: 1, title: 'essencial', amount: 1400, percentage: 10 },
  { id: 2, title: 'investimento', amount: 800, percentage: 50 },
  { id: 3, title: 'pessoal', amount: 750, percentage: 20 },
]

export default function AllCards() {
  const cards = DUMMY_DATA.map((category) => (
    <CategoryCard key={category.id} data={category} />
  ))

  return (
    <>
      <AddAmount />
      <SubtractAmount />
      <TransferAmount />
      <EditCategory />
      <AddCategory />

      <section className={styles.section}>
        {cards}
        <NoCard />
      </section>
    </>
  )
}
