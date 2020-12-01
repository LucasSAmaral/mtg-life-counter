import React from "react";
import styled from "styled-components";

type CounterButtonProps = {
  symbol: "+" | "-";
  updateValue: () => void;
  setValueAnimation: () => void;
};

const CounterButton: React.FC<CounterButtonProps> = ({
  symbol,
  updateValue,
  setValueAnimation,
}) => {
  return (
    <MtgLifeCounterButton
      onClick={() => {
        updateValue();
        setValueAnimation();
      }}
      onTouchStart={() => {}}
    >
      {symbol}
    </MtgLifeCounterButton>
  );
};

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
    animation: pulse 200ms cubic-bezier(0.66, 0, 0, 1);
  }
`;

export default CounterButton;
