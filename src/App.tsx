import React, { useState } from "react";
import styled from "styled-components";
import ReloadIcon from "./assets/icons/reload-icon.png";
import LifeCounter from "./component/LifeCounter.container";
import "./App.scss";
function App() {
  const [reloadCounter, setReloadCounter] = useState(false);
  return (
    <MtgContainer>
      <MtgTitle>MTG Life Counter</MtgTitle>
      <LifeCounter
        reloadCounter={reloadCounter}
        setReloadCounter={setReloadCounter}
      />
      <MtgButtonWrapper>
        <MtgDivisor />
        <MtgReloadButton onClick={() => setReloadCounter(true)}>
          <img src={ReloadIcon} alt="" />
        </MtgReloadButton>
      </MtgButtonWrapper>
      <LifeCounter
        reloadCounter={reloadCounter}
        setReloadCounter={setReloadCounter}
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

const MtgButtonWrapper = styled.div`
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
  background-color: black;
  border: none;
  outline: none;

  img {
    width: 100%;
    height: auto;
  }
`;

export default App;
