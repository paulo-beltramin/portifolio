import { Outlet } from "react-router"
import { Header } from "../Header"
import { Footer } from "../Footer"


export const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
