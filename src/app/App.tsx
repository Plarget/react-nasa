import { withProviders } from "./providers"
import { Route, Routes } from "react-router-dom"
import Layout from "@/widgets/Layout"
import MainPage from "@/pages/MainPage"
import AsteroidPage from "@/pages/AsteroidPage"
import "./styles"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<MainPage/>}/>
          <Route path="asteroid/:asteroidId" element={<AsteroidPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default withProviders(App)
