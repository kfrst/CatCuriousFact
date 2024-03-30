import { searchImages } from "../services/catImages"
import { searchFact } from "../services/catFact"
import { useState } from "react"

let nextId = 0

export function useCatItems(selectedBreed) {
  const [catItems, setCatItems] = useState([])
  const [itemError, setItemError] = useState(null)
  const getCatItem = async () => {
    try {
      setItemError(null)
      const newFact = await searchFact()
      const [newImage, imageError, breedInfo] = await searchImages(selectedBreed)
      const itemInfo = breedInfo ? breedInfo : selectedBreed
      const newItem = createItem(nextId, newFact, newImage, itemInfo)
      if (imageError) setItemError(imageError)
      setCatItems((catItems) => [newItem, ...catItems])
      nextId++
    } catch (e) {
      setItemError((e) => e.message)
    }
  }

  return [catItems, getCatItem, itemError]
}

function createItem(newId, catFact, catImage, breedInfo) {
  return {
    id: newId,
    image: catImage,
    fact: catFact,
    breed: {
      name: breedInfo.name,
      description: breedInfo.description,
      origin: breedInfo.origin,
      temperament: breedInfo.temperament,
      life_span: breedInfo.life_span,
    },
  }
}
