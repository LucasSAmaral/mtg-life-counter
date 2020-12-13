import React, { useState, useEffect } from "react";
import InputText from "../InputText/InputText.component";
import DeckColorComponent from "../DeckColor/DeckColor.component";
import LifeCounterComponent from "./LifeCounter.component";
import styled, { css } from "styled-components";

export type Colors = "RED" | "BLUE" | "BLACK" | "WHITE" | "GREEN";

export type ValueAnimation = "--decrease" | "--increase" | "";

type LifeCounterProps = {
  reloadCounter: boolean;
};

type ColorsObjectType = {
  [Key in Colors]: ColorsHexadecimal;
};

type ColorsHexadecimal =
  | "#D3202A"
  | "#0E68AB"
  | "#A69F9D"
  | "#F9FAF2"
  | "#00733E";

const colorsObject: ColorsObjectType = {
  RED: "#D3202A",
  BLUE: "#0E68AB",
  BLACK: "#A69F9D",
  WHITE: "#F9FAF2",
  GREEN: "#00733E",
};

const deckColorHandler = (
  deckColors: Colors[],
  colorsObject: ColorsObjectType
) => {
  if (deckColors.length > 0) {
    if (deckColors.length === 1) {
      return css`
        background-color: ${colorsObject[deckColors[0]]};
      `;
    }
    return css`
      background-image: linear-gradient(
        45deg
          ${deckColors.map((deckColor, index) => {
            const deckColorsLength: number = deckColors.length;
            return index + 1 <= deckColorsLength
              ? `, ${colorsObject[deckColor]}`
              : `${colorsObject[deckColor]}`;
          })}
      );
    `;
  }
  return css`
    background-color: #000000;
  `;
};

const LifeCounter: React.FC<LifeCounterProps> = ({ reloadCounter }) => {
  const [counterValue, setConterValue] = useState(20);
  const [valueAnimation, setValueAnimation] = useState<ValueAnimation>("");
  const [deckColors, setDeckColors] = useState<Colors[]>([]);

  const handleColorsArray = (color: Colors) => {
    if (deckColors.length === 0) {
      setDeckColors([color]);
    } else if (deckColors.includes(color)) {
      const newColors = deckColors.filter((colors) => colors !== color);
      setDeckColors(newColors);
    } else {
      setDeckColors([...deckColors, color]);
    }
  };

  useEffect(() => {
    setConterValue(20);
    // eslint-disable-next-line
  }, [reloadCounter]);

  return (
    <MtgLifeCounterContainer deckColors={deckColors}>
      <InputText />
      <LifeCounterComponent
        counterValue={counterValue}
        valueAnimation={valueAnimation}
        setConterValue={setConterValue}
        setValueAnimation={setValueAnimation}
      />
      <DeckColorComponent
        handleColorsArray={handleColorsArray}
        deckColors={deckColors}
      />
    </MtgLifeCounterContainer>
  );
};

const MtgLifeCounterContainer = styled.div<{ deckColors: Colors[] }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  height: 100%;
  ${({ deckColors }) => deckColorHandler(deckColors, colorsObject)};

  &:first-of-type {
    @media (max-width: 720px) {
      transform: rotate(180deg);
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default LifeCounter;
