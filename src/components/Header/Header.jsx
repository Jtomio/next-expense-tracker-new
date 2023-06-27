import Image from 'next/image'
import React from 'react'
import ImageUser from '../../../public/imgUser.png'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.message}>
        <h1>Olá.... senti saudades </h1>
        <h2>Sua carteira esta esperando por você</h2>
      </div>
      <div className={styles.avatar}>
        <Image src={ImageUser} alt="avatar" width={50} />
      </div>
    </section>
  )
}
