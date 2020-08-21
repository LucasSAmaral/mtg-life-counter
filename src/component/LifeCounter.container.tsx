import React, { useState } from "react";
import InputText from "./InputText/InputText.component";
import CounterButton from "./CounterButton/CounterButton.component";
import DeckColorComponent from "./DeckColor/DeckColor.component";

export type Colors = "RED" | "BLUE" | "BLACK" | "WHITE" | "GREEN" | "NONE";

type ValueAnimation = "--decrease" | "--increase" | "";

const LifeCounter: React.FC = () => {
  const [counterValue, setConterValue] = useState(20);
  const [valueAnimation, setValueAnimation] = useState<ValueAnimation>("");
  const [deckColor, setDeckColor] = useState<Colors>("NONE");

  type ColorsObjectType = {
    [Key in Colors]: ColorsObjectClasses;
  };

  type ColorsObjectClasses =
    | ""
    | "--red-deck"
    | "--blue-deck"
    | "--black-deck"
    | "--white-deck"
    | "--green-deck";

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
