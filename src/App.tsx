import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import NoSleep from "nosleep.js";
import ReloadIcon from "./assets/icons/reload-icon.png";
import LifeCounter from "./component/LifeCounter/LifeCounter.container";
import "./App.scss";
function App() {
  const [reloadCounter, setReloadCounter] = useState(false);
  const noSleep = new NoSleep();

  useEffect(() => {
    document.addEventListener(
      "DOMContentLoaded",
      function enableNoSleep() {
        document.removeEventListener("DOMContentLoaded", enableNoSleep, false);
        noSleep.enable();
      },
      false
    );
    // eslint-disable-next-line
  }, []);

  return (
    <MtgContainer>
      <MtgTitle>MTG Life Counter</MtgTitle>
      <LifeCounter
        reloadCounter={reloadCounter}
        dataCyClass="first-life-counter"
      />
      <MtgReloadButtonWrapper>
        <MtgDivisor />
        <MtgReloadButton onClick={() => setReloadCounter(true)}>
          <MtgReloadIcon
            src={ReloadIcon}
            reloadCounter={reloadCounter}
            alt=""
            onAnimationEnd={() => setReloadCounter(false)}
            data-cy="restart-counters"
          />
        </MtgReloadButton>
      </MtgReloadButtonWrapper>
      <LifeCounter
        reloadCounter={reloadCounter}
        dataCyClass="second-life-counter"
      />
    </MtgContainer>
  );
}

const MtgContainer = styled.div`
  height: 100vh;
  background-color: #000000;
  font-family: "MTG";
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 720px) {
    justify-content: space-between;
    padding: 0;
    overflow: hidden;
  }
`;

const MtgTitle = styled.h1`
  color: #d8dcdd;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 720px) {
    display: none;
  }
`;

const MtgReloadButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const MtgDivisor = styled.div`
  height: 1px;
  background-color: #d8dcdd;
  width: 100%;
`;

const MtgReloadButton = styled.button`
  position: absolute;
  top: -15px;
  background-color: transparent;
  border: none;
  outline: none;
`;

const MtgReloadIcon = styled.img<{ reloadCounter: boolean }>`
  width: 100%;
  height: auto;
  ${({ reloadCounter }) =>
    reloadCounter
      ? css`
          animation: ${ReloadRotate} 600ms linear both;
        `
      : ""}
`;

const ReloadRotate = keyframes`
0% {
  transform: rotate(0deg) scale(1);
}
25% {
  transform: rotate(90deg) scale(1.2);
}
50% {
  transform: rotate(180deg) scale(1.2);
}
75% {
  transform: rotate(270deg) scale(1.2);
}
100% {
  transform: rotate(360deg) scale(1);
}
`;

export default App;
