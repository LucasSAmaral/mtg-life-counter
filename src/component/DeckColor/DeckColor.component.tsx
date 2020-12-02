import React, { useState } from "react";
import styled from "styled-components";
import redIcon from "../../assets/icons/red.png";
import blackIcon from "../../assets/icons/black.png";
import blueIcon from "../../assets/icons/blue.png";
import whiteIcon from "../../assets/icons/white.png";
import greenIcon from "../../assets/icons/green.png";
import { Colors } from "../LifeCounter/LifeCounter.container";

type DeckColorComponentProps = {
  setDeckColor: (color: Colors) => void;
};

const DeckColorComponent: React.FC<DeckColorComponentProps> = ({
  setDeckColor,
}) => {
  const [isColorOptionsOpened, setIsColorOptionsOpened] = useState(false);

  type ManaDecks = { colorIcon: string; color: Colors }[];

  const manaDecks: ManaDecks = [
    {
      colorIcon: redIcon,
      color: "RED",
    },
    {
      colorIcon: blueIcon,
      color: "BLUE",
    },
    {
      colorIcon: blackIcon,
      color: "BLACK",
    },
    {
      colorIcon: whiteIcon,
      color: "WHITE",
    },
    {
      colorIcon: greenIcon,
      color: "GREEN",
    },
  ];
  return (
    <MtgDeckColorContainer>
      <MtgDeckColor
        isColorOptionsOpened={isColorOptionsOpened}
      >
        <p onClick={() => setIsColorOptionsOpened(!isColorOptionsOpened)}>
          Change deck color
        </p>
        <MtgDeckColorOptions>
          {manaDecks.map((manaDeck) => (
            <li key={manaDeck.color}>
              <MtgDeckColorButton onClick={() => setDeckColor(manaDeck.color)}>
                <img src={manaDeck.colorIcon} alt={manaDeck.color} />
              </MtgDeckColorButton>
            </li>
          ))}
        </MtgDeckColorOptions>
      </MtgDeckColor>
    </MtgDeckColorContainer>
  );
};

const MtgDeckColorContainer = styled.div`
height: 8.375rem;
  position: relative;
  width: 100%;
  max-height: 8.375rem;
  display: flex;
  justify-content: center;

  @media (min-width: 721px) {
    display: none;
  }

  @media (max-height: 628px) {
    display: none;
  }
`;

const MtgDeckColor = styled.div<{isColorOptionsOpened: boolean}>`
font-family: "MTG";
  color: #d8dcdd;
  text-align: center;
  background-color: #000000;
  text-transform: uppercase;
  border-top: 1px solid #d8dcdd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-left: 1px solid #d8dcdd;
  border-right: 1px solid #d8dcdd;
  width: 90%;
  height: 500px;
  margin: 0 auto;
  padding-top: 10px;
  position: absolute;
  transition: 400ms;
  top: ${({isColorOptionsOpened}) => isColorOptionsOpened ? "0" : "75%"};

  p {
    margin-bottom: 40px;
  }
`;

const MtgDeckColorOptions = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
`

const MtgDeckColorButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  img {
    height: 100%;
    width: 100%;
  }
`;

export default DeckColorComponent;
