import { useState, useEffect } from "react"
import { searchBreeds } from "../services/catBreeds"

const randomBreed = [
  {
    id: "random",
    name: "Random Cat",
    description: "No info about random cats",
    origin: "unknown",
    temperament: "unknown",
    life_span: "unknown",
  },
]

export function useCatBreeds() {
  const [catBreeds, setCatBreeds] = useState([...randomBreed])
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    async function getBreeds() {
      try {
        const response = await searchBreeds()
        if (!ignore) {
          setError(null)
          setCatBreeds((c) => [...c, ...response])
        }
      } catch (e) {
        setError(e.message)
      }
    }
    getBreeds()
    return () => {
      ignore = true
    }
  }, [])
  return [catBreeds, error]
}
