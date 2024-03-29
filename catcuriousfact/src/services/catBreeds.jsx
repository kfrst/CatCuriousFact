export const searchBreeds = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds")
    const breedJson = await response.json()
    const breeds = breedJson.map((breed) => ({
      id: breed.id,
      name: breed.name,
      description: breed.description,
      origin: breed.origin,
      temperament: breed.temperament,
      life_span: breed.life_span,
    }))
    return breeds
  } catch (e) {
    throw new Error("We don't have breed filter available, try it later")
  }
}
