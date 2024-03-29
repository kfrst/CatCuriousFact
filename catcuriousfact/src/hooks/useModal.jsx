import { useState } from "react"

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [dataIndex, setDataIndex] = useState(0)
  const openModal = (index) => {
    setIsOpen(true)
    setDataIndex(index)
  }
  const closeModal = () => setIsOpen(false)
  return [isOpen, dataIndex, openModal, closeModal]
}
