import { useEffect, useState } from "react"
import { ProductoDelCarrito } from "../components/ProductoDelCarrito"

const initialCarrito = [
  {
    title: 'Producto 1',
    price: 100,
    quantity: 1,
    id: 1
  },
  {
    title: 'Producto 2',
    price: 200,
    quantity: 2,
    id: 2
  },
  {
    title: 'Producto 3',
    price: 150,
    quantity: 1,
    id: 3
  }
]

export const CartPage= () => {

  // const [initialCarrito,] = useContext(carritoContext)

  const [carritoDeCompras, setCarritoDeCompras] = useState(initialCarrito)

  const [precioTotal, setPrecioTotal] = useState(0)

  useEffect( () => {
    setPrecioTotal(0)
    carritoDeCompras.forEach((producto) => {
      const precioASumar = producto.price * producto.quantity
      setPrecioTotal( (precio) => precio + precioASumar )
    })
  }, [carritoDeCompras])


  

  return (
    <>
      <h1>Mi carrito de compras</h1>
      <ul>
        {
          carritoDeCompras.map((producto) => (
            <ProductoDelCarrito key={producto.id} producto={producto} setCarritoDeCompras={setCarritoDeCompras}/>
          ))
        }
      </ul>
        <h2>
          Precio total: {precioTotal}
        </h2>

      <button>
        Pagar
      </button>
    </>
  )
}
