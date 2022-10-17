import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import styled, { keyframes } from 'styled-components';
import animation from '../assets/animation/47127-glass-of-cocktail.json';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(253, 240, 234);
`;

const bounce = keyframes`
    100% {
        top: -5px;
        text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
    
    }
`;

const Ment = styled.div`
  transform: translate(0%, -35%);
  font-size: 32px;
  font-weight: 700;
  position: relative;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
  animation: ${bounce} 0.4s ease-in-out infinite alternate;
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
      <Ment>{text}</Ment>
    </Background>
  );
};

export default Loading;
