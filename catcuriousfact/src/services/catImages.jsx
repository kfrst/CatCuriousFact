import { tigerPictures, tigerInfo } from "../assets/images"

const CATAPI_KEY = import.meta.env.VITE_CATAPI_KEY
const CATAPI_HEADER = {
  "Content-Type": "application/json",
  "x-api-key": CATAPI_KEY ? CATAPI_KEY : " ",
}
let nextIndex = getRandomIndex(0, 6)

export const searchImages = async (breed) => {
  let newImage,
    imageError,
    breedInfo = null
  const isRandom = breed.id === "random"
  const url = isRandom
    ? "https://api.thecatapi.com/v1/images/search?has_breeds=true"
    : `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`
  try {
    const response = await fetch(url, { headers: CATAPI_HEADER })
    const imageJson = await response.json()
    newImage = imageJson[0].url
    if (isRandom) breedInfo = imageJson[0].breeds[0]
    return [newImage, imageError, breedInfo]
  } catch {
    newImage = tigerPictures[nextIndex]
    imageError =
      "I couldn't get you an image from your choices, so you've been blessed with one from my own cat"
    breedInfo = { ...tigerInfo }
    nextIndex = getRandomIndex(0, 6)
    return [newImage, imageError, breedInfo]
  }
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
