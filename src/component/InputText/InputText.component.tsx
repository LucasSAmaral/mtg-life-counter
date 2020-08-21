import React, { useState } from "react";

import "./__InputText.scss";

const InputText = () => {
  const PLAYER_NAME: string = "Player's Name";

  const [inputValue, setInputValue] = useState(PLAYER_NAME);

  const onBlurHandler = (value: string) => {
    if (value === "") {
      setInputValue(PLAYER_NAME);
    }
  };

  return (
    <input
      className="mtg-player-name"
      type="text"
      value={inputValue}
      onFocus={() => setInputValue("")}
      onBlur={() => onBlurHandler(inputValue)}
      onChange={(e) => setInputValue(e.target.value)}
      onTouchStart={() => {}}
    />
  );
};

export default InputText;
