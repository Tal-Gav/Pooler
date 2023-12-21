import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PlayersAmount from "./Pages/PlayersAmount";
import BallResults from "./Pages/BallResults";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={`/pooler`}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/players" element={<PlayersAmount />} />
        <Route path="/randomball/:numOfPlayers" element={<BallResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
