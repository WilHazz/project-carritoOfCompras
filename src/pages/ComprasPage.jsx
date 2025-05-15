import { useEffect, useState } from "react";

export const ComprasPage = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.in/api/products");
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
    </>
  );
};
