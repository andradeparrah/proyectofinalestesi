import React from "react";

export const Card = ({ img, titulo, descripcion, price }) => {
  return (
    <div className="mt- mb-3">
      <p className="flex justify-center">{titulo}</p>
      <img className="flex h-36 mx-32 " src={img} alt={titulo} />
      <p className="flex justify-center text-xs">{descripcion}</p>
      <hr />
      <p className="flex justify-center">{price}</p>
      <div>
        <button className="mx-44 text-white rounded-full p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-bluw-300" >Comprar</button>
      </div>
    </div>
  );
};
