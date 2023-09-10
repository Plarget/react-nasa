import type { FC } from "react"
import "./Footer.scss"

const Footer: FC = () => {
  return (
    <footer className="footer">
      <small className="footer__copyright text">
        © Все права и планета защищены
      </small>
    </footer>
  )
}

export default Footer