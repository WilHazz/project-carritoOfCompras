import { useEffect, useState } from "react";

export const ComprasPage = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch();
  };

  useEffect(() => {
    fetchProductos();
  }, [third]);

  return <div>ComprasPage</div>;
};
