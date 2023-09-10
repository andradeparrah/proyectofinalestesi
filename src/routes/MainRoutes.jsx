import { Route, Routes } from "react-router-dom"
import { CartPage } from "../pages/CartPage"
import { Bikes } from "../pages/Bikes"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Accessories } from "../pages/Accessories"




export const MainRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cartpage" element={<CartPage/>}/>
            <Route path="/accessories" element={<Accessories/>}/>
            <Route path="/bikes" element={<Bikes/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </main>
  )
}