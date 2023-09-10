import type { FC } from "react"
import type { TAsteroidComponent } from "./types.ts"
import getDateFormatted from "@/shared/utils/getDateFormatted"
import getAverageNumber from "@/shared/utils/getAverageNumber"
import classNames from "classnames"
import SvgIcon from "@/shared/ui/SvgIcon"
import Button from "@/shared/ui/Button"
import useAppDispatch from "@/shared/hooks/useAppDispatch"
import { addItem } from "@/shared/store/reducers/BasketSlice"
import useAppSelector from "@/shared/hooks/useAppSelector"
import "./Asteroid.scss"
import { Link } from "react-router-dom"

const Asteroid: FC<TAsteroidComponent> = (props) => {
  const {
    element,
    hasButton,
    distanceAsteroid = "kilometers"
  } = props
  const {
    close_approach_data,
    estimated_diameter,
    name,
    is_potentially_hazardous_asteroid,
    id
  } = element
  const dispatch = useAppDispatch()
  const basket = useAppSelector(state => state.BasketSlice)
  const isInBasket = basket.find((element) => id === element.id)
  const buttonText = isInBasket ? "в корзине" : "заказать"


  const {close_approach_date, miss_distance} = close_approach_data[0]
  const date = getDateFormatted(close_approach_date)
  const radius = Math.round(getAverageNumber(estimated_diameter.meters))
  const distance = Math.round(+miss_distance[distanceAsteroid]).toLocaleString()
  const formattedDistance = distanceAsteroid == "kilometers" ? `${distance} км` :`${distance} лун`
  const formattedName = name.replace(/[()]/g, "")

  const isSmall = radius <= 150
  return (
    <div className="asteroid">
      <h3 className="asteroid__title title title--small">{date}</h3>
      <div className="asteroid__body">
        <div className="asteroid__distance">
          <div className="asteroid__distance-value text">{formattedDistance}</div>
          <SvgIcon className="asteroid__distance-icon" name="arrows-line"/>
        </div>
        <div className="asteroid__image-wrapper">
          <img
            className={classNames("asteroid__image", {
              "is-small": isSmall
            })}
            src="/images/content/asteroid.png"
            alt="asteroid"
            width="37" height="40" loading="lazy"
          />
        </div>
        <div className="asteroid__info">
          <Link className="asteroid__info-name label" to={`asteroid/${id}`}>{formattedName}</Link>
          <div className="asteroid__info-radius text text--very-small">{`Ø ${radius} м`}</div>
        </div>
      </div>
      <div className="asteroid__actions">
        {hasButton && (
          <Button
            className={classNames("asteroid__actions-button button--uppercase", {
              "is-active": isInBasket
            })}
            onClick={() => dispatch(addItem(element))}
          >
            {buttonText}
          </Button>
        )}
        {is_potentially_hazardous_asteroid && (
          <div className="asteroid__actions-dangerous text text--small text--gray">
            <SvgIcon className="asteroid__actions-dangerous-icon" name="dangerous"/>
            Опасен
          </div>
        )}
      </div>
    </div>
  )
}

export default Asteroid