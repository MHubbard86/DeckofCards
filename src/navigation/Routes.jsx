import React from "react";
import { Routes, Route } from "react-router-dom";
import CardsGame from "../features/CardsGame/CardsGame";

const CardsGamePath = '/cardsgame';

function MainRoutes() {
  return (
    <Routes>
      <Route path={CardsGamePath} exact element={<CardsGame />} />
      <Route path="/" exact element={<CardsGame />} />
      <Route path="*" element={<CardsGame />} />
    </Routes>
  );
}

export default MainRoutes;

