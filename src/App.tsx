import React, { useState } from "react";
import "./App.scss";
import LifeCounter from "./component/LifeCounter.container";
function App() {
  const [reloadCounter, setReloadCounter] = useState(false);
  return (
    <div className="mtg-container">
      <h1 className="mtg-title">MTG Life Counter</h1>
      <LifeCounter
        reloadCounter={reloadCounter}
        setReloadCounter={setReloadCounter}
      />
      <div className="mtg-divisor" />
      <button onClick={() => setReloadCounter(true)}>Reload</button>
      <LifeCounter
        reloadCounter={reloadCounter}
        setReloadCounter={setReloadCounter}
      />
    </div>
  );
}

export default App;
