
export const CartPage = () => {
  const { carritoDeCompras } = useCarrito();

  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    setPrecioTotal(0);
    carritoDeCompras.forEach((producto) => {
      const precioASumar = producto.price * producto.quantity;
      setPrecioTotal((precio) => precio + precioASumar);
    });
  }, [carritoDeCompras]);

  return (
    <>
      <h1>Mi carrito de compras</h1>
      <ul>
        {carritoDeCompras.map((producto) => (
          <ProductoDelCarrito
            key={producto.id}
            producto={producto}
            // Aquí puedes pasar funciones para agregar o eliminar productos si es necesario
          />
        ))}
      </ul>
      <h2>Precio total: {precioTotal}</h2>
      <button>Pagar</button>
    </>
  );
};
