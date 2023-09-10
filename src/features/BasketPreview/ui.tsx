import type { FC } from "react"
import type { TAsteroid } from "@/shared/types/comon.ts"
import useAppSelector from "@/shared/hooks/useAppSelector"
import AsteroidsList from "@/shared/ui/AsteroidsList"
import { useEffect, useState } from "react"
import useAppDispatch from "@/shared/hooks/useAppDispatch"
import { removeAllItems } from "@/shared/store/reducers/BasketSlice"
import "./BasketPreview.scss"

const BasketPreview: FC = () => {
  const [result, setResult] = useState<Array<TAsteroid>>([])

  const state = useAppSelector(state => state.BasketSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setResult(state)
    dispatch(removeAllItems())
  }, [])

  const hasResult = result.length > 0

  if (!hasResult) return (
    <div className="basket-preview">
      <h2 className="basket-preview__title title">Астероидов нет :(</h2>
    </div>
  )

  return (
    <div className="basket-preview">
      <h2 className="basket-preview__title title">Астероиды успешно отправленны!</h2>
      <div className="basket-preview__body">
        <AsteroidsList list={result} hasButton={false}/>
      </div>
    </div>
  )
}

export default BasketPreview