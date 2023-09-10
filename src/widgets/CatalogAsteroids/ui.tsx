import type { FC } from "react"
import type { TAsteroid, TAsteroidDistance } from "@/shared/types/comon.ts"
import { useQuery } from "@tanstack/react-query"
import asteroidServices from "@/shared/services/asteroidServices"
import AsteroidsList from "@/shared/ui/AsteroidsList"
import getQueryDate from "@/shared/utils/getQueryDate"
import { useEffect, useState } from "react"
import useThrottle from "@/shared/hooks/useThrottle"
import Loading from "@/shared/ui/Loading"
import Basket from "./ui/Basket"
import classNames from "classnames"
import "./CatalogAsteroids.scss"

const CatalogAsteroids: FC = () => {
  const [queryDate, setQueryDate] = useState(getQueryDate(new Date()))
  const [result, setResult] = useState<Array<TAsteroid>>([])
  const [
    distanceAsteroid,
    setDistanceAsteroid
  ] = useState<TAsteroidDistance>("kilometers")

  const {isFetching: isLoading} = useQuery(
    ["asteroid-list", queryDate],
    () => asteroidServices.getAsteroids(queryDate),
    {
      onSuccess: (data) => {
        setResult([...result, ...data.near_earth_objects[queryDate]])
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
  const checkPosition = () => {
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight

    const scrolled = window.scrollY
    const threshold = height - screenHeight / 4
    const position = scrolled + screenHeight

    if (position >= threshold && !isLoading) {
      const date = new Date(queryDate)
      date.setDate(date.getDate() - 1)
      setQueryDate(getQueryDate(date))
    }
  }

  const throttleCheckPosition = useThrottle(checkPosition)
  useEffect(() => {
    window.addEventListener("scroll", throttleCheckPosition)
    return () => window.removeEventListener("scroll", throttleCheckPosition)
  })

  return (
    <section className="catalog-asteroids">
      <div className="catalog-asteroids__inner container">
        <div className="catalog-asteroids__body">
          <div className="catalog-asteroids__header">
            <h1 className="catalog-asteroids__title title">Ближайшие подлёты астероидов</h1>
            <div className="catalog-asteroids__header-actions">
              <button
                className={classNames("catalog-asteroids__header-button text", {
                  "is-active": distanceAsteroid == "kilometers"
                })}
                type="button"
                onClick={() => setDistanceAsteroid("kilometers")}
              >
                в километрах
              </button>
              <span className="catalog-asteroids__header-separator text">|</span>
              <button
                className={classNames("catalog-asteroids__header-button text", {
                  "is-active": distanceAsteroid == "lunar"
                })}
                type="button"
                onClick={() => setDistanceAsteroid("lunar")}
              >
                в лунных орбитах
              </button>
            </div>
          </div>
          <div className="catalog-asteroids__list">
            {result && <AsteroidsList list={result} distanceAsteroid={distanceAsteroid}/>}
          </div>
          {isLoading && <Loading className="catalog-asteroids__loading"/>}
        </div>
        <div className="catalog-asteroids__basket-wrapper">
          <Basket className="catalog-asteroids__basket"/>
        </div>
      </div>
    </section>
  )
}

export default CatalogAsteroids