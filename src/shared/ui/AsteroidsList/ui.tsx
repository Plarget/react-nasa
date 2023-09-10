import type { FC } from "react"
import type { TAsteroidsList } from "./types.ts"
import Asteroid from "./ui/Asteroid"
import "./AsteroidsList.scss"

const AsteroidsList: FC<TAsteroidsList> = (props) => {
  const {
    list,
    hasButton = true,
    distanceAsteroid
  } = props

  const hasList = list.length > 0
  return (
    <ul className="asteroids-list">
      {hasList && list.map((element) => (
        <li className="asteroids-list__item" key={element.id}>
          <Asteroid element={element} hasButton={hasButton} distanceAsteroid={distanceAsteroid}/>
        </li>
      ))}
    </ul>
  )
}

export default AsteroidsList