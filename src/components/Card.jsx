import { useState } from "react";
import "../style/card.css";

export default function Card({ imagen, titulo, descripcion, precio }) {
  const [added, SetAdded] = useState(false);

  return (
    <>
      <div className="tarjeta">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
          <h3 className="tarjeta-titulo">{titulo}</h3>
          <p className="tarjeta-descripcion">{descripcion}</p>
          <p className="tarjeta-precio">{precio}</p>
        </div>
        {added ? (
          <button type="button" className="boton-quitar">
            Quitar carrito
          </button>
        ) : (
          <button type="button" className="boton-agregar">
            Agregar Carrito
          </button>
        )}
      </div>
    </>
  );
}
