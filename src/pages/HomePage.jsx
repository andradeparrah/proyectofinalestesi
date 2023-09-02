import { useContext } from "react";
import { UserContext } from "../context/user/userContext";

export const HomePage = () => {

  const [state, ] = useContext(UserContext)
  console.log(state)
  return (
    <>
      { (state?.user) 
        ? (<h2>Bienvenido {state.user.username}</h2>)
        : (<h2>Bienvenido registrate o inicia sesión</h2>)
      }
      <img className="h-96" src="public/assets/images/mtb5.jpeg" alt="" />
      <img src="public/assets/images/mtb2.jpeg" alt="" />
      <hr />
    </>
  );
};