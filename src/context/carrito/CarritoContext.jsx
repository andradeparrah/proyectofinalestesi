import React, { useEffect, useState } from 'react';
import { ProductoDelCarrito } from '../components/ProductoDelCarrito';

export const CartPage = () => {
  const { carritoDeCompras } = useCarrito();
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    try {
      setPrecioTotal(0);
      carritoDeCompras.forEach((producto) => {
        const precioASumar = producto.price * producto.quantity;
        setPrecioTotal((precio) => precio + precioASumar);
      });
    } catch (error) {
      console.error('Error en CartPage:', error);
    }
  }, [carritoDeCompras]);

  return (
    <>
      <h1>Mi carrito de compras</h1>
      <ul>
        {carritoDeCompras.map((producto) => (
          <ProductoDelCarrito
            key={producto.id}
            producto={producto}
          />
        ))}
      </ul>
      <h2>Precio total: {precioTotal}</h2>
      <button>Pagar</button>
    </>
  );
};
