import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import QuestionScreen from './pages/QuestionScreen';
import Home from './pages/Home';
import ResultScreen from './pages/ResultScreen';
import PpakScreen from './pages/Ppak';

import Loading from './components/Loading';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  let wh = window.innerWidth * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--wh', `${wh}px`);
}

setScreenSize();

const WebPage = styled.article`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    ${(props) => props.one} 0%,
    ${(props) => props.two} 100%
  );
  overflow: auto;
`;

const MobileFit = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

function App() {
  // 그라디언트 state
  const [one, setOne] = useState('white');
  const [two, setTwo] = useState('skyblue');
  const [cocktailType, setCocktailType] = useState({
    type: '',
    point: [],
  });

  const cockTailSetting = (cocktailResult) => {
    setCocktailType(cocktailResult);
  };

  const BMTIdata = () => {
    const type = cocktailType.type;
    const point = cocktailType.point;
    const data = [];
    for (let i = 0; i < 4; i++) {
      const braket = {};
      braket['type'] = type[i];
      braket['point'] = point[i];
      data.push(braket);
    }
    return data;
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <WebPage one={one} two={two}>
        <MobileFit>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/question"
              element={
                <QuestionScreen
                  cocktailType={cocktailType}
                  cockTailSetting={cockTailSetting}
                />
              }
            />
            <Route
              path="/loading"
              element={<Loading cocktailType={cocktailType} />}
            />
            <Route
              path="/resultScreen"
              element={
                <ResultScreen
                  BMTIdata={BMTIdata}
                  cocktailType={cocktailType}
                  setCocktailType={setCocktailType}
                />
              }
            />
            <Route
              path="/ppak"
              element={
                <PpakScreen
                  cocktailType={cocktailType}
                  setCocktailType={setCocktailType}
                />
              }
            />
          </Routes>
        </MobileFit>
      </WebPage>
    </BrowserRouter>
  );
}
export default App;
