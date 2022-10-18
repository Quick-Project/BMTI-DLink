import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';

const WebPage = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient
    (180deg, ${(props) => props.one} 0%, ${(props) => props.two} 100%);
`;

const MobileFit = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  //차후 지울 보더
  border: 1px solid red;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

function App() {
  // 그라디언트 state
  const [one, setOne] = useState('white');
  const [two, setTwo] = useState('#FAF6EE');

  return (
    <BrowserRouter>
      <WebPage one={one} two={two}>
        <MobileFit>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MobileFit>
      </WebPage>
    </BrowserRouter>
  );
}
export default App;
