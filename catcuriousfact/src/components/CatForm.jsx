export function CatForm(props) {
  const { handleClick, selectedBreedId, setSelectedBreedId, catBreeds } = props
  return (
    <>
      <div className="flex max-sm:flex-col justify-center">
        <button
          type="button"
          className="p-2 rounded-md border-2 border-solid border-gray bg-sky-100 hover:font-semibold"
          onClick={handleClick}
        >
          Give me a Curious Fact
        </button>
        <label className="p-2">
          with a/an
          <select
            className="max-xs:w-36 sm:mx-2 p-2 bg-sky-50 text-center rounded-full cursor-pointer border border-solid border-gray"
            value={selectedBreedId}
            onChange={(e) => setSelectedBreedId(e.target.value)}
          >
            {catBreeds.map((breed) => {
              return (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              )
            })}
          </select>
          Cat Picture
        </label>
      </div>
    </>
  )
}
