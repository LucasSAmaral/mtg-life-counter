import React from "react";
import CounterButton from "../CounterButton/CounterButton.component";
import { ValueAnimation } from "../LifeCounter.container";

type LifeCounterComponentProps = {
  counterValue: number;
  valueAnimation: ValueAnimation;
  setConterValue: React.Dispatch<React.SetStateAction<number>>;
  setValueAnimation: React.Dispatch<React.SetStateAction<ValueAnimation>>;
};

const LifeCounterComponent: React.FC<LifeCounterComponentProps> = ({
  counterValue,
  valueAnimation,
  setConterValue,
  setValueAnimation,
}) => {
  return (
    <div className="mtg-life-counter">
      <CounterButton
        symbol="-"
        updateValue={() => setConterValue(counterValue - 1)}
        setValueAnimation={() => setValueAnimation("--decrease")}
      />
      <div
        className={`mtg-life-counter-value ${valueAnimation} ${
          counterValue <= 0 ? "--lost" : ""
        }`}
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
  );
};

export default LifeCounterComponent;
