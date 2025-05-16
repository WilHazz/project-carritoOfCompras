import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
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

  const comprasReducer = (state = (initialState.action = {})) => {
    switch (action.type) {
      case "[Carrito] Agregar Compra":
        return [...state, action.payload];
        break;
      case "[Carrito] Aumentar Cantidad Compra": //Agregar cantidad y Modificar
        break;
      case "[Carrito] Disminuir Cantidad de Compra": //Disminuir cantidad y Modificar
        break;
      case "[Carrito] Eliminar Compra":
        return state.filter((compra) => compra.id !== action.payload);
        break;

      default:
        break;
    }
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
