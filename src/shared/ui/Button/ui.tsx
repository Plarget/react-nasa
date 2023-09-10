import type { FC } from "react"
import type { TButton } from "./types.ts"
import classNames from "classnames"
import "./Button.scss"

const Button: FC<TButton> = (props) => {
  const {
    className,
    children,
    type = "button",
    ...rest
  } = props

  return (
    <button
      className={classNames(className, "button")}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button