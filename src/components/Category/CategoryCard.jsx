import React from 'react'
import styles from './Category.module.scss'
import { TbPencil } from 'react-icons/tb'
import useGetCurrency from '@/src/hooks/useGetCurrency'
import CategoryMenu from './CategoryMenu'
import useMenu from '@/src/hooks/useMenu'

export default function CategoryCard({ data }) {
  const { title, amount, percentage } = data
  const formatedAmount = useGetCurrency(amount)
  const [isVisible, toggleMenuHandler] = useMenu()

  return (
    <div className={styles.card}>
      <div className={styles.edit}>
        <TbPencil className="icon hover" onClick={toggleMenuHandler} />
        {isVisible && (
          <CategoryMenu toggleMenuHandler={toggleMenuHandler} data={data} />
        )}
      </div>
      <h2>{title}</h2>
      <h3>{formatedAmount}</h3>
      <h4>Alocado: {percentage}%</h4>
    </div>
  )
}
