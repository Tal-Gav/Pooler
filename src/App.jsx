import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import RandomBall from "./Pages/RandomBall";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={`/pooler`}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/players" element={<Players />} />
        <Route path="/randomball/:numOfPlayers" element={<RandomBall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
