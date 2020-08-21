import React, { useState } from "react";
import redIcon from "../../assets/icons/red.png";
import blackIcon from "../../assets/icons/black.png";
import blueIcon from "../../assets/icons/blue.png";
import whiteIcon from "../../assets/icons/white.png";
import greenIcon from "../../assets/icons/green.png";
import { Colors } from "../LifeCounter.container";

import "./__DeckColor.scss";

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
  );
};

export default DeckColorComponent;
