import React from "react";
import styled, { keyframes } from "styled-components";

type CounterButtonProps = {
  symbol: "+" | "-";
  updateValue: () => void;
  setValueAnimation: () => void;
  dataCy: "decrease" | "increase";
};

const CounterButton: React.FC<CounterButtonProps> = ({
  symbol,
  updateValue,
  setValueAnimation,
  dataCy,
}) => {
  return (
    <MtgLifeCounterButton
      onClick={() => {
        updateValue();
        setValueAnimation();
      }}
      onTouchStart={() => {}}
      data-cy={dataCy}
    >
      {symbol}
    </MtgLifeCounterButton>
  );
};

const Pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(216, 220, 221, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 10px 20px rgba(216, 220, 221, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(216, 220, 221, 0);
  }
`;

const MtgLifeCounterButton = styled.button`
  width: 100%;
  height: 100%;
  color: #d8dcdd;
  font-family: "MTG";
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 40px;
  border-radius: 100%;
  max-width: 100px;

  &:active {
    animation: ${Pulse} 200ms cubic-bezier(0.66, 0, 0, 1);
  }
`;

export default CounterButton;
