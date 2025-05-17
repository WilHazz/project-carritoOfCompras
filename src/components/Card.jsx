import { useState } from "react";
import "../style/card.css";

export default function Card({
  imagen,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleQuitar,
  handleAumertar,
  handleDisminuir,
}) {
  const [added, SetAdded] = useState(false);
  const clickQuitar = () => {
    SetAdded(false);
    handleQuitar();
  };

  const clickAgregar = () => {
    SetAdded(true);
    handleAgregar();
  };

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>
        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar carrito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >
            Agregar Carrito
          </button>
        )}
      </div>
    </div>
  );
}
