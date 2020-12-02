import React, { useState, useEffect } from "react";
import InputText from "../InputText/InputText.component";
import DeckColorComponent from "../DeckColor/DeckColor.component";
import LifeCounterComponent from "./LifeCounter.component";
import styled from "styled-components";

export type Colors = "RED" | "BLUE" | "BLACK" | "WHITE" | "GREEN" | "NONE";

export type ValueAnimation = "--decrease" | "--increase" | "";

type LifeCounterProps = {
  reloadCounter: boolean;
};

type ColorsObjectType = {
  [Key in Colors]: ColorsObjectClasses;
};

type ColorsObjectClasses =
  | "--none"
  | "--red-deck"
  | "--blue-deck"
  | "--black-deck"
  | "--white-deck"
  | "--green-deck";

const colorsObject: ColorsObjectType = {
  NONE: "--none",
  RED: "--red-deck",
  BLUE: "--blue-deck",
  BLACK: "--black-deck",
  WHITE: "--white-deck",
  GREEN: "--green-deck",
};

const deckColorHandler = (colors: ColorsObjectClasses) => {
switch (colors) {
  case "--red-deck":
    return "linear-gradient(to bottom, #000000, #f9aa8f)"
  case "--black-deck":
    return "linear-gradient(to bottom, #000000, #cbc2bf)"
  case "--blue-deck":
    return "linear-gradient(to bottom, #000000, #aae0fa)"
  case "--white-deck":
    return "linear-gradient(to bottom, #000000, #fffbd5)"
  case "--green-deck":
    return "linear-gradient(to bottom, #000000, #9bd3ae)"
  case "--none":
  default:
    return "none"
}
}

const LifeCounter: React.FC<LifeCounterProps> = ({ reloadCounter }) => {
  const [counterValue, setConterValue] = useState(20);
  const [valueAnimation, setValueAnimation] = useState<ValueAnimation>("");
  const [deckColor, setDeckColor] = useState<Colors>("NONE");

  useEffect(() => {
    setConterValue(20);
    // eslint-disable-next-line
  }, [reloadCounter]);

  return (
    <MtgLifeCounterContainer colors={colorsObject[deckColor]}>
      <InputText />
      <LifeCounterComponent
        counterValue={counterValue}
        valueAnimation={valueAnimation}
        setConterValue={setConterValue}
        setValueAnimation={setValueAnimation}
      />
      <DeckColorComponent setDeckColor={setDeckColor} />
    </MtgLifeCounterContainer>
  );
};

const MtgLifeCounterContainer = styled.div<{colors: ColorsObjectClasses}>`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-image: ${({colors}) => deckColorHandler(colors)};

  &:first-of-type {
    @media (max-width: 720px) {
      transform: rotate(180deg);
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export default LifeCounter;
