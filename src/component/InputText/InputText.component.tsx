import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const InputText = () => {
  const PLAYER_NAME: string = "Player's Name";

  const [inputValue, setInputValue] = useState(PLAYER_NAME);

  const onBlurHandler = (value: string) => {
    if (value === "") {
      setInputValue(PLAYER_NAME);
    }
  };

  return (
    <MtgPlayerName
      type="text"
      value={inputValue}
      onFocus={() => setInputValue("")}
      onBlur={() => onBlurHandler(inputValue)}
      onChange={(e) => setInputValue(e.target.value)}
      onTouchStart={() => {}}
    />
  );
};

const PulseFocus = keyframes`
0% {
    box-shadow: 0 0 0 0 rgba(216, 220, 221, 0.7);
  }

  70% {
    box-shadow: 0 0 10px 20px rgba(216, 220, 221, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(216, 220, 221, 0);
  }
`;

const MtgPlayerName = styled.input`
  background-color: transparent;
  border: none;
  color: wheat;
  font-family: "MTG";
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  outline: none;
  padding: 10px 15px 15px;
  border-radius: 52px;

  &:focus {
    animation: ${PulseFocus} 2s infinite;
  }
`;

export default InputText;
