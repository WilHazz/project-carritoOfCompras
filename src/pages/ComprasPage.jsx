import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);

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
