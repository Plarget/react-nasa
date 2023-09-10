import type { FC, LinkHTMLAttributes } from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import SvgIcon from "@/shared/ui/SvgIcon"
import "./Logo.scss"

const Logo: FC<LinkHTMLAttributes<HTMLElement>> = (props) => {
  const {
    className,
  } = props

  return (
    <Link className={classNames(className, "logo")} to="/" aria-label="to home page">
        <span className="logo__body" title="to home page">
          <SvgIcon className="logo__icon" name="Logo"/>
        </span>
    </Link>
  )
}

export default Logo