import type { FC } from "react"
import Logo from "@/shared/ui/Logo"
import "./Header.scss"

const Header: FC = () => {
  return (
    <header className="header">
      <Logo className="header__logo"/>
      <div className="header__content text text--arial">
        <p>ООО “Команда им. Б. Уиллиса”.</p>
        <p>Взрываем астероиды с 1998 года.</p>
      </div>
    </header>
  )
}

export default Header