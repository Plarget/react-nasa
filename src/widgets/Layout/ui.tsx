import type { FC } from "react"
import { Outlet } from "react-router"
import Content from "./ui/Content"
import Header from "./ui/Header"
import Footer from "./ui/Footer"

const Layout: FC = () => {
  return (
    <>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
    </>
  )
}

export default Layout