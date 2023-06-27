import React from 'react'
import CardMenu from '../UI/CardMenu'
import useCloseMenu from '@/src/hooks/useCloseMenu'

export default function CategoryMenu({ toggleMenuHandler }) {
  const menuRef = useCloseMenu(toggleMenuHandler)

  return (
    <CardMenu ref={menuRef}>
      <li>Editar</li>
      <li>Adicionar</li>
      <li>Descontar</li>
      <li>Transferir</li>
    </CardMenu>
  )
}
