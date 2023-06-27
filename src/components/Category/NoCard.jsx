import React from 'react'
import styles from './NoCard.module.scss'
import { TbPlus } from 'react-icons/tb'

export default function NoCard() {
  return (
    <div className={styles['no-card']}>
      <TbPlus className="icon hover" />
    </div>
  )
}
