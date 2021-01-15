import React from "react";
import styled, { css, keyframes } from "styled-components";
import CounterButton from "../CounterButton/CounterButton.component";
import { ValueAnimation } from "./LifeCounter.container";

type LifeCounterComponentProps = {
  counterValue: number;
  valueAnimation: ValueAnimation;
  setConterValue: React.Dispatch<React.SetStateAction<number>>;
  setValueAnimation: React.Dispatch<React.SetStateAction<ValueAnimation>>;
};

const valueAnimationHandler = (valueAnimation: ValueAnimation) => {
  switch (valueAnimation) {
    case "--increase":
      return css`
        animation: ${Increase} 200ms ease-in-out both;
      `;
    case "--decrease":
      return css`
        animation: ${Decrease} 200ms ease-in-out both;
      `;
    default:
      return "none";
  }
};

const LifeCounterComponent: React.FC<LifeCounterComponentProps> = ({
  counterValue,
  valueAnimation,
  setConterValue,
  setValueAnimation,
}) => {
  return (
    <MtgLifeCounter>
      <CounterButton
        symbol="-"
        updateValue={() => setConterValue(counterValue - 1)}
        setValueAnimation={() => setValueAnimation("--decrease")}
        dataCy="decrease"
      />
      <MtgLifeCounterValue
        valueAnimation={valueAnimation}
        counterValue={counterValue}
        onAnimationEnd={() => setValueAnimation("")}
        data-cy="value"
      >
        {counterValue}
      </MtgLifeCounterValue>
      <CounterButton
        symbol="+"
        updateValue={() => setConterValue(counterValue + 1)}
        setValueAnimation={() => setValueAnimation("--increase")}
        dataCy="increase"
      />
    </MtgLifeCounter>
  );
};

const MtgLifeCounter = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`;

const MtgLifeCounterValue = styled.div<{
  valueAnimation: ValueAnimation;
  counterValue: number;
}>`
  font-size: 100px;
  color: #d8dcdd;
  padding: 0 20px;
  text-align: center;

  ${({ counterValue }) =>
    counterValue <= 0
      ? css`
          color: red;
        `
      : ""}

  ${({ valueAnimation }) => valueAnimationHandler(valueAnimation)}
`;

const Increase = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    color: green;
  }
  100% {
    transform: scale(1);
  }
`;

const Decrease = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
    color: red;
  }
  100% {
    transform: scale(1);
  }
`;

export default LifeCounterComponent;
