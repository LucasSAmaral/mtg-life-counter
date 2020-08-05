import React from "react";

type CounterButtonType = {
  symbol: string;
  updateValue: () => void;
};

const CounterButton: React.FC<CounterButtonType> = ({ symbol, updateValue }) => {
  return (
    <button className="mtg-life-counter-button" onClick={updateValue}>
      {symbol}
    </button>
  );
};

export default CounterButton;
