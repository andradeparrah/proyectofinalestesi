import { useState } from "react";

export const ProductoDelCarrito = ({ producto, setCarritoDeCompras }) => {
  const [contador, setContador] = useState(producto.quantity);

  const aumentar = () => {
    setCarritoDeCompras((productos) => {
      const productosArray = productos.map((product) => {
        if (product.id === producto.id) {
          return {
            ...product,
            quantity: contador + 1
          };
        } else {
          return product;
        }
      });
      return productosArray;
    });
    setContador(contador + 1);
  };

  const disminuir = () => {
    if (contador > 1) {
      setCarritoDeCompras((productos) => {
        const productoMatch = productos.map((product) => {
          if (product.id === producto.id) {
            return {
              ...product,
              quantity: contador - 1
            };
          } else {
            return product;
          }
        });
        return productoMatch;
      });
      setContador(contador - 1);
    }
  };

  return (
    <li>
      <h3>{producto.price}</h3>
      <p>{producto.title}</p>
      <button onClick={disminuir}>-1</button>
      <p>{contador}</p>
      <button onClick={aumentar}>+1</button>
      <p>Precio total producto: {producto.price * producto.quantity}</p>
    </li>
  );
};
