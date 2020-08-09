import React, { useState } from "react";
import InputText from "../InputText/InputText";
import CounterButton from "../CounterButton/CounterButton";
import redIcon from "../../assets/icons/red.png";
import blackIcon from "../../assets/icons/black.png";
import blueIcon from "../../assets/icons/blue.png";
import whiteIcon from "../../assets/icons/white.png";
import greenIcon from "../../assets/icons/green.png";

const LifeCounter: React.FC = () => {
  const [counterValue, setConterValue] = useState(20);
  const [valueAnimation, setValueAnimation] = useState("");
  const [isColorOptionsOpened, setIsColorOptionsOpened] = useState(false);
  const [deckColor, setDeckColor] = useState("");

  const manaDecks = [
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

  type colorsObjectType = {
    [key: string]: string;
  };

  const colorsObject: colorsObjectType = {
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
            {manaDecks.map((manaDeck) => (
              <li key={manaDeck.color}>
                <button onClick={() => setDeckColor(manaDeck.color)}>
                  <img src={manaDeck.colorIcon} alt={manaDeck.color} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LifeCounter;
