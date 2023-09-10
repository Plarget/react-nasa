import type { FC, HTMLAttributes } from "react"
import Button from "@/shared/ui/Button"
import classNames from "classnames"
import useAppSelector from "@/shared/hooks/useAppSelector"
import { useState } from "react"
import Popup from "@/shared/ui/Popup"
import "./Basket.scss"
import BasketPreview from "@/features/BasketPreview"

const Basket: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const {
    className
  } = props
  const [activePopup, setActivePopup] = useState(false)
  const basket = useAppSelector(state => state.BasketSlice)

  const basketCountItem = basket.length == 0 ? `0 астероидов` : (
    basket.length == 1 ? `1 астероид` : (
      basket.length < 5 ? `${basket.length} астероида` : `${basket.length} астероидов`
    )
  )
  return (
    <div className={classNames(className, "basket")}>
      <div className="basket__header">
        <h3 className="basket__title label label--big">Корзина</h3>
        <div className="basket__count text">{basketCountItem}</div>
      </div>
      <Button
        className="basket__button button--big button--orange"
        onClick={() => setActivePopup(true)}
      >
        Отправить
      </Button>
      {activePopup && (
        <Popup setActive={setActivePopup}>
          <BasketPreview/>
        </Popup>
      )}
    </div>
  )
}

export default Basket