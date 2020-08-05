import React, { useState } from "react";
import InputText from "../InputText/InputText";
import CounterButton from "../CounterButton/CounterButton";

const LifeCounter: React.FC = () => {
  const [counterValue, setConterValue] = useState(20);
  return (
    <div className="mtg-life-counter-container">
      <InputText />
      <div className="mtg-life-counter">
        <CounterButton
          symbol="-"
          updateValue={() => setConterValue(counterValue - 1)}
        />
        <div className="mtg-life-counter-value">{counterValue}</div>
        <CounterButton
          symbol="+"
          updateValue={() => setConterValue(counterValue + 1)}
        />
      </div>
    </div>
  );
};

export default LifeCounter;
