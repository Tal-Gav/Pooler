import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import RandomBall from "./Pages/RandomBall";
import "./App.css";

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/randomball/:numOfPlayers" element={<RandomBall />} />
      </Routes>
    </Router>
  );
}

export default App;
