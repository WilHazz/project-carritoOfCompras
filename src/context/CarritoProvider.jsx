import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

const comprasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "[Carrito] Agregar Compra":
      return [...state, action.payload];
      break;
    case "[Carrito] Aumentar Cantidad Compra":
      return state.map((item) => {
        const cant = item.cantidad + 1;
        if (item.id === action.payload)
          return {
            ...item,
            cantidad: cant,
          };
      });

    case "[Carrito] Disminuir Cantidad de Compra":
      return state.map((item) => {
        const cant = item.cantidad - 1;
        if (item.id === action.payload && item.cantidad > 1)
          return {
            ...item,
            cantidad: cant,
          };
        return item;
      });
      break;
    case "[Carrito] Eliminar Compra":
      return state.filter((compra) => compra.id !== action.payload);

    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[Carrito] Agregar Compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[Carrito] Aumentar Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: "[Carrito] Disminuir Cantidad de Compra",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[Carrito] Eliminar Compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
