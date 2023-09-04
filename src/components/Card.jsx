export const Card = ({ img, titulo, descripcion,price,agregar }) => {
  return (
    <div className="">
      <p className="flex justify-center mt-6">{titulo}</p>
      <img className="h-12 w-7" src={img} alt={titulo} />
      <p className="flex justify-center text-xs">{descripcion}</p>
      <hr />
      <p className="flex justify-center">{price}</p>
      <div className="">
        <button className="text-white rounded-full p-2  bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-bluw-300" >{agregar}</button>
      </div>
    </div>
  );
};
