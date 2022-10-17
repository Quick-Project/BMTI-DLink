import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import animation from '../assets/animation/47127-glass-of-cocktail.json';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(253, 240, 234);
  > div {
    font-size: 32px;
  }
`;

const Loading = () => {
  const [text, setText] = useState('당신을 위한 칵테일을 제조 중입니다...');
  const defaultOptions = {
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: animation,
  };

  useEffect(() => {
    setTimeout(() => {
      setText('칵테일이 만들어졌어요!');
      // 결과페이지 랜딩 코드 추가
    }, 3000);
  });

  return (
    <Background>
      <Lottie options={defaultOptions} width="400px" height="400px"></Lottie>
      <div>{text}</div>
    </Background>
  );
};

export default Loading;
