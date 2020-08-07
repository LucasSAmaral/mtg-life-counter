import React, { useState } from "react";
import InputText from "../InputText/InputText";
import CounterButton from "../CounterButton/CounterButton";

const LifeCounter: React.FC = () => {
  const [counterValue, setConterValue] = useState(20);
  const [valueAnimation, setValueAnimation] = useState("");
  const [isColorOptionsOpened, setIsColorOptionsOpened] = useState(false);
  return (
    <div className="mtg-life-counter-container">
      <InputText />
      <div className="mtg-life-counter">
        <CounterButton
          symbol="-"
          updateValue={() => setConterValue(counterValue - 1)}
          setValueAnimation={() => setValueAnimation("--decrease")}
        />
        <div
          className={`mtg-life-counter-value ${valueAnimation}`}
          onAnimationEnd={() => setValueAnimation("")}
        >
          {counterValue}
        </div>
        <CounterButton
          symbol="+"
          updateValue={() => setConterValue(counterValue + 1)}
          setValueAnimation={() => setValueAnimation("--increase")}
        />
      </div>
      <div className="mtg-deck-color-container">
        <div
          className={`mtg-deck-color ${isColorOptionsOpened ? "--opened" : ""}`}
        >
          <p onClick={() => setIsColorOptionsOpened(!isColorOptionsOpened)}>
            Change deck color
          </p>
          <ul className="mtg-deck-color-options">
            <li>Primeira Opção</li>
            <li>Segunda Opção</li>
            <li>Terceira Opção</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LifeCounter;
