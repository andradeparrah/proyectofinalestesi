'use client';
import { useContext } from "react";
import DefaultCarousel from '../components/Carousel';
import { UserContext } from "../context/user/userContext";

export const HomePage = () => {

  const [state, ] = useContext(UserContext)
  console.log(state)
  return (
    <>
    
      { (state?.user) 
        ? (<h2 className="text-center">Bienvenido al mundo de los veloces {state.user.username}</h2>)
        : (<h2 className="text-center">Bienvenido</h2>)
      }
      <section className="">
      <div className='py-32 w-full h-96 rounded-full'><DefaultCarousel/></div>
      <div>
        <img src="" alt="" />
      </div>
      </section>
    </>
  );
};



