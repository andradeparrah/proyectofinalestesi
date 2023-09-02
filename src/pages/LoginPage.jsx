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
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
