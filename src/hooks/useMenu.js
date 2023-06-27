import { useState } from 'react'

export default function useMenu() {
  const [isVisible, setIsVisible] = useState(false)
  const toggleMenuHandler = () => setIsVisible(!isVisible)

  return [isVisible, toggleMenuHandler]
}
