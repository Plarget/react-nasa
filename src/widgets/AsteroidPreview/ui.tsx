import type { FC } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import asteroidServices from "@/shared/services/asteroidServices"
import Loading from "@/shared/ui/Loading"
import getAverageNumber from "@/shared/utils/getAverageNumber"
import classNames from "classnames"
import SvgIcon from "@/shared/ui/SvgIcon"
import AsteroidApproachTable from "@/widgets/AsteroidPreview/ui/AsteroidApproachTable"
import "./AsteroidPreview.scss"

const AsteroidPreview: FC = () => {
  const params = useParams()
  const {
    data: asteroid,
    isLoading,
    isError,
  } = useQuery(
    [`asteroid-${params.asteroidId}`],
    () => asteroidServices.getAsteroid(params.asteroidId),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading || isError) {
    return (
      <div className="asteroid-preview">
        {isLoading && <Loading className="asteroid-preview__loading"/>}
        {isError && <div className="asteroid-preview__error title">Произошла ошибка!</div>}
      </div>
    )
  }
  const {
    name,
    estimated_diameter,
    close_approach_data,
    is_potentially_hazardous_asteroid
  } = asteroid

  const radius = Math.round(getAverageNumber(estimated_diameter.meters))
  const formattedName = name.replace(/[()]/g, "")

  const isSmall = radius <= 150

  return (
    <div className="asteroid-preview">
      <div className="asteroid-preview__inner container">
        <div className="asteroid-preview__header">
          <img
            className={classNames("asteroid-preview__header-image", {
              "is-small": isSmall
            })}
            src="/images/content/asteroid.png"
            alt="asteroid"
            width="37" height="40" loading="lazy"
          />
          <h2 className="asteroid-preview__header-title title">{formattedName}</h2>
          <div className="asteroid-preview__header-radius">{`Ø ${radius} м`}</div>
          {is_potentially_hazardous_asteroid && (
            <div className="asteroid-preview__header-dangerous text text--small text--gray">
              <SvgIcon className="asteroid-preview__header-dangerous-icon" name="dangerous"/>
              Опасен
            </div>
          )}
        </div>
        <div className="asteroid-preview__body">
          <AsteroidApproachTable array={close_approach_data}/>
        </div>
      </div>
    </div>
  )
}

export default AsteroidPreview