import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white text-black">
      <div className="flex justify-between items-center p-1">
        <NavLink className="text-xl font-bold" to="/home">
          Dog Bikes
        </NavLink>~
        <div className="md:hidden fl" onClick={handleMenuToggle}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>
      <div className={`${menuOpen ? "block" : "hidden"} md:flex p-2 bg-white`}>
        <NavLink className="flex py-2" to="/accessories">
          Accesorios
        </NavLink>
        <NavLink className="flex py-2" to="/bikes">
          Bicicletas
        </NavLink>
        <NavLink className="flex py-2" to="/register">
          Register
        </NavLink>
        <NavLink className="flex py-2" to="/login">Login</NavLink>
        <NavLink className="flex py-2" to="/cartpage">
          <img className="h-10 py-2" src="public/assets/images/bag.png" alt="" />
          
        </NavLink>
      </div>
    </div>
  );
};
