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
      <h1>RegisterPage</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleChange}/>
        <button type="submit">Register</button>
      </form>
    </>
  )
}