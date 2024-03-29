import { useModal } from "../hooks/useModal"
import { CatCard } from "./CatCard"
import { CatModal } from "./CatModal"

export function CatCards(props) {
  const [isOpen, dataIndex, openModal, closeModal] = useModal()
  const { catItems } = props
  return (
    <div className="flex justify-center w-full">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] lg:grid-cols-[repeat(3,minmax(min-content,max-content))] gap-8 w-full lg:w-auto list-none ">
        {catItems.map((catItem, index) => {
          return (
            <li key={catItem.id}>
              <CatCard openModal={openModal} catIndex={index} catItem={catItem} />
            </li>
          )
        })}
      </ul>
      {isOpen && <CatModal closeModal={closeModal} catItem={catItems[dataIndex]} />}
    </div>
  )
}
