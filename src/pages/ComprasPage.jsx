import { useEffect, useState } from "react";
import Card from "../components/Card";

export const ComprasPage = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

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
          ></Card>
        ))}
    </>
  );
};
