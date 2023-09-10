import { FC, PropsWithChildren } from "react"
import "./Content.scss"

const Content: FC<PropsWithChildren> = (props) => {
  const {children} = props

  return (
    <main className="main">
      <img
        className="main__image"
        src="/images/backgrounds/main_background.png"
        alt="earth"
        width="400" height="620" loading="lazy"
      />
      {children}
    </main>
  )
}

export default Content