import { useState } from "react"
import { useCatBreeds } from "./hooks/useCatBreeds"
import { useCatItems } from "./hooks/useCatItem"
import { CatForm } from "./components/CatForm"
import { CatCards } from "./components/CatCards"
import { ErrorMessage } from "./components/ErrorMessage"
import "./App.css"

function App() {
  const [selectedBreedId, setSelectedBreedId] = useState("random")
  const [catBreeds, breedError] = useCatBreeds()
  const selectedBreed = catBreeds.find((breed) => breed.id === selectedBreedId)
  const [catItems, getCatItem, itemError] = useCatItems(selectedBreed)

  const handleClick = async () => {
    getCatItem()
  }
  return (
    <div className="flex flex-col w-full items-center max-xs:text-sm">
      <header>
        {breedError && <ErrorMessage>{breedError}</ErrorMessage>}
        <CatForm
          selectedBreedId={selectedBreedId}
          setSelectedBreedId={setSelectedBreedId}
          catBreeds={catBreeds}
          handleClick={handleClick}
        />
        {itemError && <ErrorMessage>{itemError}</ErrorMessage>}
      </header>
      <main className="w-full pt-8">
        <CatCards catItems={catItems} />
      </main>
    </div>
  )
}

export default App
