import React, { useState } from "react";
import InputText from "./InputText";
import CounterButton from "./CounterButton";
import DeckColorComponent from "./DeckColor.component";

export type Colors = "RED" | "BLUE" | "BLACK" | "WHITE" | "GREEN" | "NONE";

const LifeCounter: React.FC = () => {
  const [counterValue, setConterValue] = useState(20);
  const [valueAnimation, setValueAnimation] = useState("");
  const [deckColor, setDeckColor] = useState<Colors>("NONE");

  type ColorsObjectType = {
    [Key in Colors]: string;
  };

  const colorsObject: ColorsObjectType = {
    NONE: "",
    RED: "--red-deck",
    BLUE: "--blue-deck",
    BLACK: "--black-deck",
    WHITE: "--white-deck",
    GREEN: "--green-deck",
  };

  return (
    <div className={`mtg-life-counter-container ${colorsObject[deckColor]}`}>
      <InputText />
      <div className="mtg-life-counter">
        <CounterButton
          symbol="-"
          updateValue={() => setConterValue(counterValue - 1)}
          setValueAnimation={() => setValueAnimation("--decrease")}
        />
        <div
          className={`mtg-life-counter-value ${valueAnimation} ${
            counterValue <= 0 ? "--lost" : ""
          }`}
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
      <DeckColorComponent setDeckColor={setDeckColor} />
    </div>
  );
};

export default LifeCounter;
