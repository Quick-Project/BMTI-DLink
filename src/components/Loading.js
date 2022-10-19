import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import styled, { keyframes } from 'styled-components';
import animation from '../assets/animation/47127-glass-of-cocktail.json';
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
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
  font-family: 'BMJUA';
  transform: translate(0%, -35%);
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin: 0 10%;
  position: relative;
  word-break: keep-all;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
  animation: ${bounce} 0.4s ease-in-out infinite alternate;
`;

const Loading = ({ cocktailType }) => {
  const [text, setText] = useState(
    '당신에게 어울리는 칵테일을 제조 중입니다...'
  );
  const defaultOptions = {
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: animation,
  };
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setText('칵테일이 만들어졌어요!');
    }, 3000);

    // 텍스트 변하는게 안 보여서 떼어냈습니다
    setTimeout(() => {
      if (cocktailType.point.length > 1) {
        navigate('/resultScreen');
      } else {
        navigate('/ppak');
      }
    }, 4000);
  });

  return (
    <Background>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        width="400px"
        height="400px"
      ></Lottie>
      <Ment>{text}</Ment>
    </Background>
  );
};

export default Loading;
