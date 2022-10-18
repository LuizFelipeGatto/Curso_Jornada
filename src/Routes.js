import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./paginas/Home/home";
import Filmes from "./paginas/Filmes/filmes";
import Series from "./paginas/Series/series";
import AppHeader from "./componentes/AppHeader";
import AppFooter from "./componentes/AppFooter";

const MainRoutes = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Filmes />} path="/filme" />
        <Route element={<Series />} path="/series" />
      </Routes>
      <AppFooter />
    </>
  );
};

export default MainRoutes;
