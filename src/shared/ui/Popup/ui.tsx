import type { FC, MouseEventHandler, PropsWithChildren } from "react"
import classNames from "classnames"
import type { TPopup } from "./types.ts"
import { useEffect } from "react"
import useBodyLock from "@/shared/hooks/useBodyLock"
import "./Popup.scss"
import SvgIcon from "@/shared/ui/SvgIcon"

const Popup: FC<PropsWithChildren<TPopup>> = (props) => {
  const {
    setActive,
    children
  } = props
  const bodyLock = useBodyLock()
  const popupClick: MouseEventHandler = (event) => {
    if (event.currentTarget === event.target) setActive(false)
  }

  useEffect(() => {
    bodyLock(true)
    return () => {
      bodyLock(false)
    }
  }, [])

  return (
    <div className={classNames("popup")} onClick={popupClick}>
      <div className="popup__body">
        <button
          className="popup__button"
          type="button"
          onClick={() => setActive(false)}
        >
          <SvgIcon className="popup__button-icon" name="cross"></SvgIcon>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Popup