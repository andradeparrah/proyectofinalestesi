import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import { types } from '../context/user/userReducer';
import { UserContext } from '../context/user/userContext';

export const LoginPage = () => {
  const [, dispatch] = useContext(UserContext);

  const navigate = useNavigate();

  const initialUser = {
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://backend5-petq.onrender.com/users/login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const tokenDecodificado = jwt(data.token);
      dispatch({
        type: types.setUserState,
        payload: tokenDecodificado,
      });
      window.alert('Usuario logueado');
      navigate('/');
    } catch (error) {
      window.alert('Error al loguear usuario');
      console.log(error);
      dispatch({
        type: types.setError,
        payload: error,
      });
    }
  };

  return (
    <>
      <h1 className='text-center py-4'>Ingresar</h1>
      <form className='flex flex-col space-y-4 mx-12 my-8' onSubmit={handleSubmit}>
        <label className='text-center text-xs' htmlFor="email">E-mail</label>
        <input className="rounded-lg" type="email" id="email" name="email" onChange={handleChange} />
        <label className='text-center text-xs' htmlFor="password">Contraseña</label>
        <input
          className="rounded-lg"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button className='text-white rounded-full p-2  bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-bluw-300' type="submit">Ingresa</button>
      </form>
    </>
  );
};