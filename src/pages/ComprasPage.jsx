import Card from "../components/Card";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };

  const handleQuitar = (id) => {
    eliminarCompra(id);
  };
  const handleAumertar = (id) => {};
  const handleDisminuir = (id) => {};

  return (
    <>
      <h2>Compras: </h2>
      <hr />
      {Array.isArray(productos) &&
        productos.map((producto) => (
          <Card
            key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.id)}
          ></Card>
        ))}
    </>
  );
};
