export const searchFact = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact")
    const factJson = await response.json()
    return factJson.fact
  } catch (e) {
    throw new Error("Sorry, I couldn't get you a new Fact, try again later")
  }
}
