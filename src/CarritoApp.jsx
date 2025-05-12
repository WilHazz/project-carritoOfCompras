import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export const CarritoApp = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={""}></Route>
        <Route path="/carrito" element={""}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
