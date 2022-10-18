import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import QuestionScreen from './pages/QuestionScreen';
import Home from './pages/Home';
import Loading from './components/Loading';

const WebPage = styled.article`
  width: 100vw;
  height: 100vh;
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
  return (
    <BrowserRouter>
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
          </Routes>
        </MobileFit>
      </WebPage>
    </BrowserRouter>
  );
}

export default App;
