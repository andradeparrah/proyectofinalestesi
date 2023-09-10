import { useContext } from "react";
import { UserContext } from "../context/user/userContext";

export const HomePage = () => {

  const [state, ] = useContext(UserContext)
  console.log(state)
  return (
    <>
        <h1>
      Hello world!
    </h1>
      { (state?.user) 
        ? (<h2>Bienvenido al mundo de los veloces {state.user.username}</h2>)
        : (<h2>Bienvenido</h2>)
      }
      <section className="p-10">
      <img className="rounded-full md: " src="/assets/images/mtb.png" alt="" />
      <p className="text-red-600">hola</p>
      </section>
    </>
  );
};



