import React from 'react';
import styled from 'styled-components';

import MainCocktail from './../assets/img/cocktail/home.png';

import Button from '../components/Button';

const Main = styled.div`
  padding: 45px;
`;

const Title = styled.div`
  margin-top: 75px;
  font-size: 33px;
  font-weight: 700;
  text-align: center;
`;

const Img = styled.img`
  margin: 93px 0 55px 0;
`;

const Home = () => {
  const ex = () => {
    console.log('hi');
  };
  return (
    <Main>
      <Title>
        <div>BMTI</div>
        <div>나와 어울리는 칵테일 찾기</div>
      </Title>
      <Img src={MainCocktail} alt="main" />
      {/* 승새 수정내용 */}
      <Button />
    </Main>
  );
};

export default Home;
