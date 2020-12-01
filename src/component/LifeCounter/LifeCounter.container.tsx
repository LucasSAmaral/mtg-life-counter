import React, { useState, useEffect } from "react";
import InputText from "../InputText/InputText.component";
import DeckColorComponent from "../DeckColor/DeckColor.component";
import LifeCounterComponent from "./LifeCounter.component";

export type Colors = "RED" | "BLUE" | "BLACK" | "WHITE" | "GREEN" | "NONE";

export type ValueAnimation = "--decrease" | "--increase" | "";

type LifeCounterProps = {
  reloadCounter: boolean;
};

const LifeCounter: React.FC<LifeCounterProps> = ({ reloadCounter }) => {
  const [counterValue, setConterValue] = useState(20);
  const [valueAnimation, setValueAnimation] = useState<ValueAnimation>("");
  const [deckColor, setDeckColor] = useState<Colors>("NONE");

  useEffect(() => {
    setConterValue(20);
    // eslint-disable-next-line
  }, [reloadCounter]);

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
      <LifeCounterComponent
        counterValue={counterValue}
        valueAnimation={valueAnimation}
        setConterValue={setConterValue}
        setValueAnimation={setValueAnimation}
      />
      <DeckColorComponent setDeckColor={setDeckColor} />
    </div>
  );
};

export default LifeCounter;
