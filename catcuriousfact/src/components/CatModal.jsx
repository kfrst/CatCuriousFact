import footprint from "../assets/cat-footprint.svg"
import { CatDetail } from "./CatDetail"

export function CatModal(props) {
  const { closeModal, catItem } = props
  const handleModalClick = (e) => e.stopPropagation()
  return (
    <article
      className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/50 z-50 text-sm text-white touch-auto overflow-auto"
      onClick={closeModal}
    >
      <div
        className="relative m-auto w-auto max-w-sm md:max-w-lg lg:max-w-screen-lg bg-blue-950 rounded-xl"
        onClick={handleModalClick}
      >
        <div className="p-4">
          <span className="float-right cursor-pointer hover:scale-105" onClick={closeModal}>
            <i className="fas fa-times" />
          </span>
          <div className="my-4">
            <div className="flex max-lg:flex-col items-center">
              <div className="px-4 w-full lg:w-3/5 max-lg:pb-1/10">
                <img className="w-full h-60 sm:w-full sm:h-64 lg:h-96 object-cover" src={catItem.image} />
              </div>
              <div className="flex flex-col px-4 w-full lg:w-2/5">
                <h1 className="mb-2">Fact</h1>
                <p className="mb-2">{catItem.fact}</p>
                <CatDetail breedInfo={catItem.breed} />
                <div className="absolute right-1 bottom-1">
                  <img className="w-12 h-12" src={footprint} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
