import React from "react";
import "./App.scss";
import LifeCounter from "./component/LifeCounter";
function App() {
  return (
    <div className="mtg-container">
      <h1 className="mtg-title">MTG Life Counter</h1>
      <LifeCounter />
      <div className="mtg-divisor" />
      <LifeCounter />
    </div>
  );
}

export default App;
