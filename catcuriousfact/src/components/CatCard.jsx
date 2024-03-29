import footprint from "../assets/cat-footprint.svg"

export function CatCard(props) {
  const { catItem, openModal, catIndex } = props
  return (
    <div
      onClick={() => openModal(catIndex)}
      className="flex flex-col border rounded-md overflow-hidden relative lg:max-w-lg cursor-pointer hover:scale-105"
    >
      <div className="overflow-hidden">
        <img className="w-full h-60 sm:w-full sm:h-64 lg:h-96 object-cover" src={catItem.image} />
      </div>
      <div className="flex p-4 bg-blue-950 text-start text-base text-wrap text-white">
        <div className="z-[2]">
          <p>{catItem.fact}</p>
        </div>
        <div className="absolute right-1 bottom-1">
          <img className="w-12 h-12" src={footprint} />
        </div>
      </div>
    </div>
  )
}
