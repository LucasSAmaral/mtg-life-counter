import React from "react";

type CounterButtonType = {
  symbol: string;
  updateValue: () => void;
  setValueAnimation: () => void;
};

const CounterButton: React.FC<CounterButtonType> = ({
  symbol,
  updateValue,
  setValueAnimation,
}) => {
  return (
    <button
      className="mtg-life-counter-button"
      onClick={() => {
        updateValue();
        setValueAnimation();
      }}
      onTouchStart={() => {}}
    >
      {symbol}
    </button>
  );
};

export default CounterButton;
