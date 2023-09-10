import { useState } from "react"
import { useContext } from "react"
import axios from "axios"
import jwt from "jwt-decode"
import { types } from "../context/user/userReducer"
import { UserContext } from "../context/user/userContext"

export const RegisterPage = () => {

  const [, dispatch] = useContext(UserContext)

  const initialUser = {
    username: "",
    email: "",
    password: ""
  }
  const [formUser, setFormUser] = useState(initialUser)

  const handleChange = (e) => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
   try {
      const { data } = await axios.post("https://backend5-petq.onrender.com/users/register", formUser, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      const tokenDecodificado = jwt(data.token)
      console.log(tokenDecodificado)
      dispatch({
        type: types.setUserState,
        payload: tokenDecodificado,
      })
      window.alert("Usuario registrado")
   } catch (error) {
      window.alert("Error al registrar usuario")
      console.log(error)
   }
  }

  return (
    <>
      <h1 className="text-center py-4">Registrate</h1>
      <form className="flex flex-col space-y-4 mx-12 my-8" onSubmit={handleSubmit}>
        <label className="text-center text-xs" htmlFor="username">Nombre de Usuario</label>
        <input className="rounded-lg" type="text" id="username" name="username" onChange={handleChange}/>
        <label className="text-center text-xs" htmlFor="email">E-mail</label>
        <input className="rounded-lg" type="email" id="email" name="email" onChange={handleChange}/>
        <label className="text-center text-xs" htmlFor="password">Contraseña</label>
        <input className="rounded-lg" type="password" id="password" name="password" onChange={handleChange}/>
        <button className="text-white rounded-full p-2  bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-bluw-300" type="submit">Registrate</button>
      </form>
    </>
  )
}