export function CatDetail({ breedInfo }) {
  return (
    <>
      <h2>{breedInfo.name} details</h2>
      <ul className="[&>li]:py-2 text-left">
        <li>
          <span className="text-base font-semibold">Description: </span>
          {breedInfo.description}
        </li>
        <li>
          <span className="text-base font-semibold">Origin: </span>
          {breedInfo.origin}
        </li>
        <li>
          <span className="text-base font-semibold">Temperament: </span>
          {breedInfo.temperament}
        </li>
        <li>
          <span className="text-base font-semibold">Life Span: </span>
          {breedInfo.life_span} years
        </li>
      </ul>
    </>
  )
}
